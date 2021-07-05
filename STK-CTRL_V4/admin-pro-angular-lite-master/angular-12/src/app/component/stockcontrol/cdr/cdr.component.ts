import { RepackStock } from "./../../../shared/repackStock.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MovementlogsService } from "../../../shared/logger/movementlogs.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import firebase from "firebase/app";
import { StockMovementLogs } from "../../../shared/stockMovementLogs.model";

@Component({
  selector: "app-cdr",
  templateUrl: "./cdr.component.html",
  styleUrls: ["./cdr.component.css"],
})
export class CdrComponent implements OnInit {
  constructor(
    private route: Router,
    private afs: AngularFirestore,
    private movementLogs: MovementlogsService,
    private modalService: NgbModal
  ) {}

  active = 1;
  cdrRecord: any;
  closeResult = "";
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  user = JSON.parse(localStorage.getItem("user"));

  ngOnInit(): void {
    this.afs
      .collection("lae_cdr_record", (ref) =>
        ref.where("status", "!=", "completed")
      )
      .valueChanges({ idField: "propertyId" })
      .subscribe((res) => (this.cdrRecord = res));
  }

  addCdr() {
    this.route.navigate(["/component/stkctrl/addcdr"]);
  }

  fumLocation = "";
  setFumLocation(loc) {
    this.fumLocation = loc;
  }

  model = 1;

  setFumStart(docid) {
    this.afs.collection("lae_cdr_record").doc(docid).update({
      status: "under fumigation",
      fumStart: this.timeStamp,
      location: this.fumLocation,
    });
  }

  setFumEnd(docid) {
    this.afs.collection("lae_cdr_record").doc(docid).update({
      status: "completed",
      fumEnd: this.timeStamp,
    });
  }

  updateRepack(id, sku, qty) {
    this.setFumEnd(id);
    this.afs.collection<RepackStock>("lae_repack_stock").doc().set({
      sku: sku,
      qty: qty,
      type: "CDR",
      date: this.timeStamp,
      user: this.user.displayName,
    });
  }

  logger(sku, qty, from, to) {
    this.movementLogs.movementLogWrite({
      date: this.timeStamp,
      type: "CDR Transfer",
      sku: sku,
      qty: qty,
      unit: "PACKET",
      from: from,
      to: to,
      user: this.user.displayName,
    });
  }

  open(content, id, loc, sku, qty) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          if (result == "Confirm") {
            this.setFumStart(id);
            this.logger(sku, qty, loc, this.fumLocation);
          }
          if (result == "Release") {
            this.updateRepack(id, sku, qty);
            this.logger(sku, qty, loc, "Repack Stock");
          }
          this.closeResult = `Closed with: ${result}`;
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
