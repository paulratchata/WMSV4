import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { AuthGuard } from "./shared/guard/auth.guard";

export const Approutes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "component",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./component/component.module").then(
            (m) => m.ComponentsModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/dashboard",
  },
];
