import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { salesOrderModel } from "./../../../shared/salesOrders.model";
import { Component, OnInit, PipeTransform } from "@angular/core";
import firebase from "firebase/app";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { DecimalPipe } from "@angular/common";
@Component({
  selector: "app-pendingdelivery",
  templateUrl: "./pendingdelivery.component.html",
  styleUrls: ["./pendingdelivery.component.css"],
  providers: [DecimalPipe],
})
export class PendingdeliveryComponent implements OnInit {
  constructor(
    private afs: AngularFirestore,
    private modalService: NgbModal,
    private fb: FormBuilder,
    pipe: DecimalPipe,
    private route: Router
  ) {
    this.so = this.filter.valueChanges.pipe(
      startWith(""),
      map((text) => search(text, pipe))
    );
  }

  so: Observable<salesOrderModel[]>;
  filter = new FormControl("");

  so_data: any;
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  closeResult = "";
  updateForm: FormGroup;
  assignDriverForm: FormGroup;

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      inv_number: [],
      dd_number: [],
    });
    //
    this.assignDriverForm = this.fb.group({
      vehicle: [, Validators.required],
      driver: [, Validators.required],
      crew: [, Validators.required],
      assignDate: [this.timeStamp, Validators.required],
    });
    //
    this.afs
      .collection<salesOrderModel>("sales_orders_lae", (ref) =>
        ref.where("status", "==", "pending")
      )
      .valueChanges({ idField: "docId" })
      .subscribe((res) => {
        this.so_data = res;
      });
  }
  //
  addINV(id: string) {
    if (this.updateForm.value.inv_number != null || "") {
      this.afs.collection("sales_orders_lae").doc(id).update({
        inv_number: this.updateForm.value.inv_number,
        invTime: this.timeStamp,
      });
    }
  }

  addDD(id: string) {
    if (this.updateForm.value.dd_number != null || "") {
      this.afs.collection("sales_orders_lae").doc(id).update({
        dd_number: this.updateForm.value.dd_number,
        ddTime: this.timeStamp,
      });
    }
  }

  addDriver(id: string) {
    this.afs
      .collection("sales_orders_lae")
      .doc(id)
      .update(this.assignDriverForm.value);
  }

  print(id) {
    this.route.navigate(["/component/logistics/printdelivery/" + id]);
  }
  //
  open(content, id: string) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          if (result == "AddINV") {
            this.addINV(id);
            this.updateForm.reset();
          }
          if (result == "AddDD") {
            this.addDD(id);
            this.updateForm.reset();
          }
          if (result == "AssignDriver") {
            this.addDriver(id);
            this.assignDriverForm.reset();
          }
          if (result == "Cross click") {
            this.updateForm.reset();
          }
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}

function search(text: string, pipe: PipeTransform): salesOrderModel[] {
  return this.so_data.filter((so: any) => {
    const term = text.toUpperCase();
    return (
      so.so_number.toUpperCase().includes(term) ||
      pipe.transform(so.so.inv_number).includes(term) ||
      pipe.transform(so.so.dd_number).includes(term)
    );
  });
}
