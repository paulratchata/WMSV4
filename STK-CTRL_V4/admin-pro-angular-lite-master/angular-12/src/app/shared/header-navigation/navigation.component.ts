import { Component, EventEmitter, Output } from "@angular/core";
//declare var $: any;
import { AuthService } from "../auth.service";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  public showSearch = false;

  user = JSON.parse(localStorage.getItem("user"));

  logout() {
    this.auth.SignOut();
  }
}
