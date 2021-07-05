// import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import firebase from "firebase/app";
import { SkusModel } from "../../../shared/sku.model";
import { Location } from "@angular/common";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subject, merge, OperatorFunction } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from "rxjs/operators";

const skuList = [];

@Component({
  selector: "app-addcdr",
  templateUrl: "./addcdr.component.html",
  styleUrls: ["./addcdr.component.css"],
})
export class AddcdrComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    // private route: Router,
    private location: Location
  ) {}

  cdrForm: FormGroup;
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  user = JSON.parse(localStorage.getItem("user"));
  skuName = localStorage.getItem("soh");
  skuList = this.skuName.split(",");

  ngOnInit(): void {
    this.cdrForm = this.fb.group({
      date: this.timeStamp,
      sku: [, Validators.required],
      qty: [, Validators.required],
      customer: [, Validators.required],
      unit: [, Validators.required],
      user: [this.user.displayName, Validators.required],
      status: ["pending"],
      location: ["MAIN CDR STORAGE", Validators.required],
      fumStart: [],
      fumEnd: [],
      // reason: [, Validators.required],
      // whmanagerApproval: [false],
      // salesManagerApproval: [],
    });
  }

  submit() {
    try {
      this.afs.collection("lae_cdr_record").doc().set(this.cdrForm.value);
      this.location.back();
    } catch (error) {
      alert(error);
    }
  }

  @ViewChild("instance", { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  model: any;

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ""
          ? this.skuList
          : this.skuList.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };
}
