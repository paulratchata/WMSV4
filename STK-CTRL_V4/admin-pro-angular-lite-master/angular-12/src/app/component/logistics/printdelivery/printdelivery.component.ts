import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from "@techiediaries/ngx-qrcode";
//
import jsPDF from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";

@Component({
  selector: "app-printdelivery",
  templateUrl: "./printdelivery.component.html",
  styleUrls: ["./printdelivery.component.css"],
})
export class PrintdeliveryComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.docId = this.actRoute.snapshot.paramMap.get("id");
  }

  @ViewChild("screen") screen: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  //QR
  QRelementType = NgxQrcodeElementTypes.URL;
  QRcorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  //BC
  elementType = "png";
  format = "CODE128";
  lineColor = "#000000";
  width = 2;
  height = 100;
  displayValue = true;
  fontOptions = "";
  font = "monospace";
  textAlign = "center";
  textPosition = "bottom";
  textMargin = 2;
  fontSize = 20;
  background = "#ffffff";
  margin = 2;
  marginTop = 0;
  marginBottom = 2;
  marginLeft = 2;
  marginRight = 2;

  docId = "";
  deliveryID: any;

  deliveryForm: FormGroup;

  ngOnInit(): void {
    this.afs
      .collection("sales_orders_lae")
      .doc(this.docId)
      .valueChanges()
      .subscribe((res) => {
        this.deliveryID = res;
        console.log(res);
      });
    //
    this.deliveryForm = this.fb.group({
      driver: [],
      truckCrew: [],
      truckLic: [],
      startTime: [],
      finishTime: [],
      status: [],
    });
  }
}
