import { Component, OnInit } from "@angular/core";
import { ImportService } from "../../importServices/import.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import firebase from "firebase/app";
@Component({
  selector: "app-exwhstock",
  templateUrl: "./exwhstock.component.html",
  styleUrls: ["./exwhstock.component.css"],
})
export class ExwhstockComponent implements OnInit {
  constructor(private afs: AngularFirestore, private modalService: NgbModal) {}

  exwhStock: any;
  closeResult = "";
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  selectedDoc = "";

  ngOnInit(): void {
    this.afs
      .collection("impCont_lae", (ref) =>
        ref.where("naqClearance", "==", false)
      )
      .valueChanges()
      .subscribe((res) => [(this.exwhStock = res)]);
  }
  open(content, doc: string) {
    this.selectedDoc = doc;
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
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

  naqRelease(docID) {
    this.afs
      .collection("impCont_lae")
      .doc(docID)
      .update({ naqClearance: true, naqClearanceDate: this.timeStamp });
  }

  setSelectedDoc(doc: string) {
    this.selectedDoc = doc;
  }
}
