import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { impContainer } from "../models/importContainer.model";
@Injectable({
  providedIn: "root",
})
export class ImportService {
  constructor(private afs: AngularFirestore) {}

  dbRef = this.afs.collection("impCont_lae");

  getImpCont(status: string, value: string) {
    return this.afs
      .collection<impContainer>("impCont_lae", (ref) =>
        ref.where(status, "==", value).orderBy("naqClearance", "asc")
      )
      .valueChanges();
  }

  saveShipment(docID: string, data: string) {
    this.dbRef.doc(docID).set(data);
  }
}
