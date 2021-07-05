import { SkusModel } from "./../../../shared/sku.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-stockonhand",
  templateUrl: "./stockonhand.component.html",
  styleUrls: ["./stockonhand.component.css"],
})
export class StockonhandComponent implements OnInit {
  constructor(private afs: AngularFirestore) {}

  soh: any;
  cdr: any;
  idr: any;

  ngOnInit(): void {
    this.afs
      .collection("soh")
      .valueChanges()
      .subscribe((res) => {
        this.soh = res;
        // this.createCol();
      });

    this.afs
      .collection("lae_cdr")
      .valueChanges()
      .subscribe((res) => {
        this.cdr = res;
        // this.createCol();
      });

    this.afs
      .collection("lae_idr")
      .valueChanges()
      .subscribe((res) => {
        this.idr = res;
        // this.createCol();
      });
  }

  createCol() {
    this.soh.forEach((element) => {
      this.afs.collection("xxxx").doc(element.SKU_CODE).set({
        SKU_CODE: element.SKU_CODE,
        QTY: element.QTY,
        COLOR: element.COLOR,
        expCode: element.expCode,
      });
    });
  }

  tonConv(sku: string, qty: number) {
    if (SkusModel[sku].unit == "BALES") {
      return (qty * 20) / 1000;
    }
    if (SkusModel[sku].unit == "BAGS") {
      return (qty * 10) / 1000;
    }
    if (SkusModel[sku].unit == "CRTNS") {
      return 0;
    }
    if (SkusModel[sku].unit == "BUNDLES") {
      return 0;
    }
  }
}
