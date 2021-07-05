import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { SkusModel } from "../../../shared/sku.model";

@Component({
  selector: "app-stockscan",
  templateUrl: "./stockscan.component.html",
  styleUrls: ["./stockscan.component.css"],
})
export class StockscanComponent implements OnInit {
  constructor(
    private afs: AngularFirestore,
    private route: Router,
    private actRoute: ActivatedRoute
  ) {
    this.docID = this.actRoute.snapshot.paramMap.get("docID");
  }

  docID: string;
  docData: any;
  sohQty: any;

  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  user = JSON.parse(localStorage.getItem("user"));

  ngOnInit(): void {
    this.afs
      .collection("lae_qrBucket")
      .doc(this.docID)
      .valueChanges()
      .subscribe((res) => {
        this.docData = res;
        this.sohQty = Number(localStorage.getItem(this.docData.sku));
        // if (this.docData.status != "pending") {
        //   this.route.navigate(["soh"]);
        // }
      });
  }

  confirm() {
    this.afs.collection("lae_qrBucket").doc(this.docID).update({
      status: "complete",
      scanBy: this.user.displayName,
      scanTime: this.timeStamp,
    });

    this.afs
      .collection("soh")
      .doc(this.docData.sku)
      .update({
        QTY: SkusModel[this.docData.sku].divider + this.sohQty,
      });

    this.route.navigate(["soh"]);
  }
}
