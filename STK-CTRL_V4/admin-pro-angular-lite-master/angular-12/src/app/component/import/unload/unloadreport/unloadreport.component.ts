import { MainlogService } from "./../../../../../shared/logger/mainlog.service";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SkusModel } from "../../../../shared/sku.model";
import {
  partialUnloadlog,
  fullUnloadlog,
} from "../../../../shared/logger.model";
import * as firebase from "firebase/app";

@Component({
  selector: "app-unloadreport",
  templateUrl: "./unloadreport.component.html",
  styleUrls: ["./unloadreport.component.css"],
})
export class UnloadreportComponent implements OnInit {
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private logger: MainlogService
  ) {
    this.docID = this.actRoute.snapshot.paramMap.get("docID");
  }

  docID: string;
  contData: any;
  contForm: FormGroup;
  unloadForm: FormGroup;
  timeStamp = firebase.default.firestore.FieldValue.serverTimestamp();
  user = JSON.parse(localStorage.getItem("user"));

  ngOnInit(): void {
    //
    this.afs
      .collection("impCont_lae")
      .doc(this.docID)
      .valueChanges()
      .subscribe((res: any) => {
        this.contData = res;
        this.contForm.patchValue(res);
        this.unloadForm.patchValue({
          sku: res.sku,
          qty: 0,
          attachment: res.attachment,
          attchQty: 0,
        });
      });

    this.contForm = this.fb.group({
      attachment: [],
      attchQty: [],
      cheifUnload: [],
      containerNumber: [],
      naqClearance: [],
      naqClearanceDate: [],
      qty: [],
      shipmentNumber: [],
      sku: [],
      status: [],
      unloadStart: [],
      June: [],
      partialUnload: [],
    });

    this.unloadForm = this.fb.group({
      sku: [],
      qty: [],
      attachment: [],
      attchQty: [],
      partialUnload: [],
    });
  }

  skuModel = SkusModel;

  unitDisplay(sku: string) {
    if (sku == undefined) {
      return null;
    } else {
      return SkusModel[`sku`].unit;
    }
  }

  submitHandler() {
    if (this.contForm.value.partialUnload == true) {
      try {
        //SELF UPDATE
        this.afs
          .collection("impCont_lae")
          .doc(this.docID)
          .update({
            qty: this.contData.qty - this.unloadForm.value.qty,
            attchQty: this.contData.attchQty - this.unloadForm.value.attchQty,
          });
        //LOGGER
        this.afs
          .collection<partialUnloadlog>("mainlog_lae")
          .doc()
          .set({
            event: "Partial unload",
            containerNumber: this.contData.containerNumber,
            type: "stock unload",
            date: this.timeStamp,
            user: this.user.displayName,
            orgSkuQty: this.contData.qty,
            orgAttchQty: this.contData.attchQty,
            sku: this.contData.sku,
            previousQty: this.contData.qty - this.unloadForm.value.qty,
            attachment: this.contData.attachment,
            attchQty: this.contData.attchQty - this.unloadForm.value.attchQty,
            attchPreviousQty: this.contData.attchQty,
          });
        //SEND DATA TO STKCTRL
        this.afs.collection("stkctrl_rcv_lae").doc().set({
          user: this.user.displayName,
          sku: this.contData.sku,
          qty: this.unloadForm.value.qty,
          date: this.timeStamp,
          status: "pending",
          shipmentNumber: this.contData.shipmentNumber,
          containerNumber: this.contData.containerNumber,
        }); //SKU
        this.afs.collection("stkctrl_rcv_lae").doc().set({
          user: this.user.displayName,
          sku: this.contData.attachment,
          qty: this.unloadForm.value.attchQty,
          date: this.timeStamp,
          status: "pending",
          shipmentNumber: this.contData.shipmentNumber,
          containerNumber: this.contData.containerNumber,
        }); //ATTACHMENT
        //GO BACK
        this.route.navigate(["component/import/unload"]);
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        //SELF UPDATE
        this.afs.collection("impCont_lae").doc(this.docID).update({
          qty: 0,
          attchQty: 0,
          empty: true,
          status: "unloaded",
        });
        //LOGGER
        this.afs.collection<fullUnloadlog>("mainlog_lae").doc().set({
          date: this.timeStamp,
          type: "stock unload",
          sku: this.contData.sku,
          qty: this.contData.qty,
          attachment: this.contData.attachment,
          attchQty: this.contData.attchQty,
          user: this.user.displayName,
        });
        //SEND DATA TO STKCTRL
        this.afs.collection("stkctrl_rcv_lae").doc().set({
          user: this.user.displayName,
          sku: this.contData.sku,
          qty: this.contData.qty,
          date: this.timeStamp,
          status: "pending",
          shipmentNumber: this.contData.shipmentNumber,
          containerNumber: this.contData.containerNumber,
        }); //SKU
        this.afs.collection("stkctrl_rcv_lae").doc().set({
          user: this.user.displayName,
          sku: this.contData.attachment,
          qty: this.contData.attchQty,
          date: this.timeStamp,
          status: "pending",
          shipmentNumber: this.contData.shipmentNumber,
          containerNumber: this.contData.containerNumber,
        }); //ATTACHMENT
        this.route.navigate(["component/import/unload"]);
      } catch (error) {
        alert(error);
      }
    }
  }

  // updateSOH(sku: string, qty: number) {
  //   let currentQTY = localStorage.getItem(sku);
  //   this.afs
  //     .collection("soh")
  //     .doc(sku)
  //     .set({ QTY: currentQTY + qty });
  // }
}
