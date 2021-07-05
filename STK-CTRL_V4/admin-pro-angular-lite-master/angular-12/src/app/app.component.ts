import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app";

  public sohArr: any = [];
  public sohData: any;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection("soh")
      .valueChanges()
      .subscribe((res: any) => {
        this.sohData = res;
        res.forEach((element) => {
          this.sohArr.push(element.SKU_CODE);
          localStorage.setItem(element.SKU_CODE, element.QTY);
        });
        localStorage.setItem("soh", this.sohArr);
      });
  }
}
