import { AngularFirestore } from "@angular/fire/firestore";
import { ImportService } from "./../../importServices/import.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-unloading",
  templateUrl: "./unloading.component.html",
  styleUrls: ["./unloading.component.css"],
})
export class UnloadingComponent implements OnInit {
  constructor(
    private impSrv: ImportService,
    private afs: AngularFirestore,
    private route: Router
  ) {}

  unloadingConts: any;

  ngOnInit(): void {
    this.afs
      .collection("impCont_lae", (ref) =>
        ref.where("status", "==", "unloading")
      )
      .valueChanges()
      .subscribe((res) => {
        this.unloadingConts = res;
      });
  }

  unloadReport(docID: string) {
    this.route.navigate(["component/import/unloadreport/" + docID]);
  }
}
