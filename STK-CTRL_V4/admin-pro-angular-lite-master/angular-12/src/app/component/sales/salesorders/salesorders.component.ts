import { customerLAE } from "./../../../shared/customerList";
import { Observable } from "rxjs";
import { salesOrderModel } from "./../../../shared/salesOrders.model";
import { SkusModel } from "../../../shared/sku.model";
import {
  FormControl,
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Component, OnInit, PipeTransform } from "@angular/core";
import firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { DecimalPipe } from "@angular/common";
import { map, startWith } from "rxjs/operators";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

function search(text: string, pipe: PipeTransform): salesOrderModel[] {
  return this.so_data.filter((so) => {
    const term = text.toLowerCase();
    return (
      so.so_number.toLowerCase().includes(term) ||
      pipe.transform(so.so_number).includes(term) ||
      pipe.transform(so.so_number).includes(term)
    );
  });
}

@Component({
  selector: "app-salesorders",
  templateUrl: "./salesorders.component.html",
  styleUrls: ["./salesorders.component.css"],
})
export class SalesordersComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private modalService: NgbModal
  ) {}
  soForm: FormGroup;
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  customers = customerLAE;
  products: any;
  user = JSON.parse(localStorage.getItem("user"));
  //
  so_data: any;
  //

  // Search
  countries$: Observable<salesOrderModel[]>;
  filter = new FormControl("");

  ngOnInit(): void {
    this.afs
      .collection("soh")
      .valueChanges()
      .subscribe((res) => {
        this.products = res;
      });

    this.soForm = this.fb.group({
      date: [this.timeStamp],
      customer: [, Validators.required],
      so_number: [, Validators.required],
      soTime: [this.timeStamp],
      inv_number: [],
      invTime: [],
      dd_number: [],
      ddTime: [],
      status: ["pending", Validators.required],
      sku: this.fb.array([]),
      user: [this.user.displayName, Validators.required],
      transport: [, Validators.required],
      veh: [],
      driver: [],
      truckCrew: [],
    });
    // FIRE CALL
    this.afs
      .collection<salesOrderModel>("sales_orders_lae", (ref) =>
        ref.where("status", "==", "pending")
      )
      .valueChanges({ idField: "docId" })
      .subscribe((res) => {
        this.so_data = res;
      });
  }

  skuUnit(sku: string) {
    return SkusModel[sku].unit;
  }

  get skuList() {
    return this.soForm.get("sku") as FormArray;
  }

  addSku() {
    let productSet = this.fb.group({
      skuCode: [, Validators.required],
      qty: [, Validators.required],
      unit: [, Validators.required],
    });
    this.skuList.push(productSet);
  }

  delSku(i: number) {
    this.skuList.removeAt(i);
  }

  // Create SO
  // Modal open
  closeResult = "";
  creatSo(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          if (result == "Save") {
            this.afs
              .collection("sales_orders_lae")
              .doc()
              .set(this.soForm.value);
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
