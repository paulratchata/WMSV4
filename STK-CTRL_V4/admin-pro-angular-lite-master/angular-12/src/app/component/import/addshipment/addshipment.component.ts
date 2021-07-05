import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ImportService } from "../importServices/import.service";
import { Router } from "@angular/router";
import { AppComponent } from "../../../app.component";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-addshipment",
  templateUrl: "./addshipment.component.html",
  styleUrls: ["./addshipment.component.css"],
})
export class AddshipmentComponent implements OnInit {
  constructor(
    private impServ: ImportService,
    private fb: FormBuilder,
    private router: Router,
    private app: AppComponent,
    private calendar: NgbCalendar
  ) {}

  shipmentForm!: FormGroup;
  model: NgbDateStruct;
  date: { year: number; month: number };

  skuList = this.app.sohArr;

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
    this.shipmentForm = this.fb.group({
      eta: [, Validators.required],
      shipmentNumber: [],
      shippingAgent: [],
      loadingDate: [Validators.required],
      dftDate: [],
      containersForm: this.fb.array([]),
    });
  }

  get containerList() {
    return this.shipmentForm.get("containersForm") as FormArray;
  }

  addCont() {
    let containerData = this.fb.group({
      shipmentNumber: [this.shipmentForm.value.shipmentNumber],
      containerNumber: [],
      sku: [],
      qty: [],
      attachment: [],
      attchQty: [],
      naqClearance: [false],
      naqClearanceDate: [],
      partialUnload: [],
    });
    this.containerList.push(containerData);
  }

  removeCont(i: number) {
    this.containerList.removeAt(i);
  }

  submit() {
    let conVal = this.shipmentForm.value;
    try {
      this.shipmentForm.value.containersForm.forEach((element: any) => {
        this.impServ.saveShipment(
          conVal.shipmentNumber + "_" + element.containerNumber,
          element
        );
      });
      this.router.navigate(["component/import/addshipment"]);
      // this.impServ.saveShipment()
    } catch (error) {
      alert(error);
    }
  }
}
