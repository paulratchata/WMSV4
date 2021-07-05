import { FormBuilder } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { tagsDataModel } from "./../../../shared/tagData.model";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import firebase from "firebase/app";
import { SkusModel } from "../../../shared/sku.model";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";
@Component({
  selector: "app-printstock-tag",
  templateUrl: "./printstock-tag.component.html",
  styleUrls: ["./printstock-tag.component.css"],
})
export class PrintstockTagComponent implements OnInit {
  constructor(
    private afs: AngularFirestore,
    private route: Router,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.docID = this.actRoute.snapshot.paramMap.get("docID");
    try {
      this.afs
        .collection<tagsDataModel>("stkctrl_rcv_lae")
        .doc(this.docID)
        .valueChanges({ idField: "docId" })
        .subscribe((res) => {
          this.tagData = res;
          this.tagGenNumber = res.qty / SkusModel[this.tagData.sku].divider;
        });
    } catch (error) {
      alert(error);
    }
  }

  docID: string;
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  tagData: tagsDataModel;
  isClicked = false;
  user = JSON.parse(localStorage.getItem("user"));

  tagQR = [];
  tagGenNumber: number;

  ngOnInit(): void {}

  get tagGen() {
    return this.tagGenNumber;
  }

  createQR() {
    this.isClicked = true;
    let data = this.tagData;
    for (let i = 0; i < this.tagGenNumber; i++) {
      this.tagQR.push({
        user: data.user,
        containerNumber: data.containerNumber,
        date: data.date,
        shipmentNumber: data.shipmentNumber,
        sku: data.sku,
        qty: this.tagGenNumber,
        status: data.status,
        uuid: uuidv4(),
        number: i,
        total: this.tagGenNumber,
      });
      // console.log(this.tagQR[i]);
    }
    this.tagQR.forEach((element) => {
      this.afs.collection("lae_qrBucket").doc(element.uuid).set(element);
    });
  }

  markGenComplete() {
    this.afs.collection("stkctrl_rcv_lae").doc(this.docID).update({
      status: "generated",
      genBy: this.user.displayName,
      genTime: this.timeStamp,
    });
  }

  public printTags(): void {
    let DATA = document.getElementById("tagsDiv");

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 35;
      let fileHeight = 35;

      const FILEURI = canvas.toDataURL("image/png");
      let PDF = new jsPDF("p", "cm", "a4");
      let position = 0;
      PDF.addImage(FILEURI, "PNG", 0, position, fileWidth, fileHeight);

      PDF.save("angular-demo.pdf");
      PDF.autoPrint();
    });
  }
}
