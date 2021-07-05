import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";
import { ImportService } from "../../importServices/import.service";
import * as firebase from "firebase/app";
@Component({
  selector: "app-readytounload",
  templateUrl: "./readytounload.component.html",
  styleUrls: ["./readytounload.component.css"],
})
export class ReadytounloadComponent implements OnInit {
  constructor(public afs: AngularFirestore) {}

  exwhStock: any;
  readyConts: any;
  timeStamp = firebase.default.firestore.FieldValue.serverTimestamp();
  userData = JSON.parse(localStorage.getItem("user"));
  ngOnInit(): void {
    this.afs
      .collection("impCont_lae", (ref) => ref.where("naqClearance", "==", true))
      .valueChanges()
      .subscribe((res) => (this.exwhStock = res));
  }

  settoUnloading(docID: string) {
    this.afs.collection("impCont_lae").doc(docID).update({
      status: "unloading",
      unloadStart: this.timeStamp,
      cheifUnload: this.userData.displayName,
    });
  }
}
