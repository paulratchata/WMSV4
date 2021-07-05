import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { tagsDataModel } from "../../../shared/tagData.model";
import { Router } from "@angular/router";
export interface tagsId extends tagsDataModel {
  id: string;
}
@Component({
  selector: "app-stocktags",
  templateUrl: "./stocktags.component.html",
  styleUrls: ["./stocktags.component.css"],
})
export class StocktagsComponent implements OnInit {
  constructor(private afs: AngularFirestore, private route: Router) {}

  rcvTags: Observable<tagsId[]>;

  ngOnInit(): void {
    this.rcvTags = this.afs
      .collection<tagsDataModel>("stkctrl_rcv_lae")
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as tagsDataModel;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  printtags(docID: string) {
    this.route.navigate(["component/stkctrl/printstocktags/" + docID]);
  }
}
