import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customerdamage",
  templateUrl: "./customerdamage.component.html",
  styleUrls: ["./customerdamage.component.css"],
})
export class CustomerdamageComponent implements OnInit {
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {}
}
