import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { StockMovementLogs } from "../stockMovementLogs.model";
@Injectable({
  providedIn: "root",
})
export class MovementlogsService {
  constructor(private afs: AngularFirestore) {}

  movementLogWrite(data: StockMovementLogs) {
    this.afs
      .collection<StockMovementLogs>("stockMovement_lae_logs")
      .doc()
      .set(data);
  }
}
