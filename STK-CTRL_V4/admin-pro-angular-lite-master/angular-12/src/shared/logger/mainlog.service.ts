import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class MainlogService {
  timeStamp = firebase.firestore.FieldValue.serverTimestamp();
  user = JSON.parse(localStorage.getItem("user"));

  constructor(private afs: AngularFirestore) {}

  mainLogWrite(event: string, data: string) {
    this.afs.collection("mainlog_lae").doc().set({
      timeDate: this.timeStamp,
      eventName: event,
      data: data,
      user: this.user.displayName,
    });
  }
}
