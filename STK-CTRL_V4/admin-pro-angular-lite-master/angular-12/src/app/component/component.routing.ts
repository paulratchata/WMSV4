import { PrintdeliveryComponent } from "./logistics/printdelivery/printdelivery.component";
import { PendingdeliveryComponent } from "./logistics/pendingdelivery/pendingdelivery.component";
import { SalesordersComponent } from "./sales/salesorders/salesorders.component";
import { AddcdrComponent } from "./stockcontrol/addcdr/addcdr.component";
import { FocComponent } from "./stockcontrol/foc/foc.component";
import { PalletComponent } from "./stockcontrol/pallet/pallet.component";
import { CdrComponent } from "./stockcontrol/cdr/cdr.component";
import { IdrComponent } from "./stockcontrol/idr/idr.component";
import { StockonhandComponent } from "./stockcontrol/stockonhand/stockonhand.component";
import { StockscanComponent } from "./stockcontrol/stockscan/stockscan.component";
import { PrintstockTagComponent } from "./stockcontrol/printstock-tag/printstock-tag.component";
import { UnloadreportComponent } from "./import/unload/unloadreport/unloadreport.component";
import { UnloadComponent } from "./import/unload/unload.component";
import { StocktagsComponent } from "./stockcontrol/stocktags/stocktags.component";
import { AddshipmentComponent } from "./import/addshipment/addshipment.component";
import { FumigationtableComponent } from "./import/fumigationtable/fumigationtable.component";
import { ExwarehouseComponent } from "./import/exwarehouse/exwarehouse.component";
import { SchedComponent } from "./import/sched/sched.component";
import { Routes } from "@angular/router";

import { NgbdpregressbarBasicComponent } from "./progressbar/progressbar.component";
import { NgbdpaginationBasicComponent } from "./pagination/pagination.component";
import { NgbdAccordionBasicComponent } from "./accordion/accordion.component";
import { NgbdAlertBasicComponent } from "./alert/alert.component";
import { NgbdCarouselBasicComponent } from "./carousel/carousel.component";
import { NgbdDatepickerBasicComponent } from "./datepicker/datepicker.component";
import { NgbdDropdownBasicComponent } from "./dropdown-collapse/dropdown-collapse.component";
import { NgbdModalBasicComponent } from "./modal/modal.component";
import { NgbdPopTooltipComponent } from "./popover-tooltip/popover-tooltip.component";
import { NgbdratingBasicComponent } from "./rating/rating.component";
import { NgbdtabsBasicComponent } from "./tabs/tabs.component";
import { NgbdtimepickerBasicComponent } from "./timepicker/timepicker.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./card/card.component";
import { ToastComponent } from "./toast/toast.component";
import { AuthGuard } from "../shared/guard/auth.guard";
export const ComponentsRoutes: Routes = [
  {
    path: "",
    children: [
      // {
      //   path: "progressbar",
      //   canActivate: [AuthGuard],
      //   component: NgbdpregressbarBasicComponent,
      //   data: {
      //     title: "Progressbar",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Progressbar" },
      //     ],
      //   },
      // },
      // IMPORT
      {
        path: "import/schedule",
        canActivate: [AuthGuard],
        component: SchedComponent,
        data: {
          title: "IMPORT SCHEDULE (DEVELOPING)",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "import/exwarehouse",
        canActivate: [AuthGuard],
        component: ExwarehouseComponent,
        data: {
          title: "EX-WAREHOUSE",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "import/impfumigation",
        canActivate: [AuthGuard],
        component: FumigationtableComponent,
        data: {
          title: "IMPORT FUMIGATION",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "import/addshipment",
        canActivate: [AuthGuard],
        component: AddshipmentComponent,
        data: {
          title: "ADD SHIPMENT",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "import/unload",
        canActivate: [AuthGuard],
        component: UnloadComponent,
        data: {
          title: "UNLOAD",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "import/unloadreport/:docID",
        canActivate: [AuthGuard],
        component: UnloadreportComponent,
        data: {
          title: "UNLOAD",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      //STOCK CONTROL
      {
        path: "stkctrl/genstocktags",
        canActivate: [AuthGuard],
        component: StocktagsComponent,
        data: {
          title: "STOCK TAGS",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      //PRINT TAG
      {
        path: "stkctrl/printstocktags/:docID",
        canActivate: [AuthGuard],
        component: PrintstockTagComponent,
        data: {
          title: "STOCK TAGS",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      //SCAN STOCK
      {
        path: "stkctrl/stockscan/:docID",
        canActivate: [AuthGuard],
        component: StockscanComponent,
        data: {
          title: "STOCK RECEIVING",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      //SOH
      {
        path: "stkctrl/soh",
        canActivate: [AuthGuard],
        component: StockonhandComponent,
        data: {
          title: "STOCK ON HAND",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      //
      {
        path: "stkctrl/cdr",
        canActivate: [AuthGuard],
        component: CdrComponent,
        data: {
          title: "CUSTOMER DAMAGES",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "stkctrl/addcdr",
        canActivate: [AuthGuard],
        component: AddcdrComponent,
        data: {
          title: "ADD CDR RECORD",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "stkctrl/idr",
        canActivate: [AuthGuard],
        component: IdrComponent,
        data: {
          title: "INTERNAL DAMAGES",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "stkctrl/pallet",
        canActivate: [AuthGuard],
        component: PalletComponent,
        data: {
          title: "PALLET STOCK",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "stkctrl/foc",
        canActivate: [AuthGuard],
        component: FocComponent,
        data: {
          title: "FOC.",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      // SALES
      {
        path: "sales/saleorders",
        canActivate: [AuthGuard],
        component: SalesordersComponent,
        data: {
          title: "SALES ORDERS",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      // LG
      {
        path: "logistics/pendingdelivery",
        canActivate: [AuthGuard],
        component: PendingdeliveryComponent,
        data: {
          title: "PENDING DELIVERY",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      {
        path: "logistics/printdelivery/:id",
        canActivate: [AuthGuard],
        component: PrintdeliveryComponent,
        data: {
          title: "DELIVERY TASK",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "ngComponent" },
            { title: "Cards" },
          ],
        },
      },
      //
      // {
      //   path: "card",
      //   canActivate: [AuthGuard],
      //   component: CardsComponent,
      //   data: {
      //     title: "Cards",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Cards" },
      //     ],
      //   },
      // },
      // {
      //   path: "pagination",
      //   canActivate: [AuthGuard],
      //   component: NgbdpaginationBasicComponent,
      //   data: {
      //     title: "Pagination",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Pagination" },
      //     ],
      //   },
      // },
      // {
      //   path: "accordion",
      //   component: NgbdAccordionBasicComponent,
      //   data: {
      //     title: "Accordion",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Accordion" },
      //     ],
      //   },
      // },
      // {
      //   path: "alert",
      //   component: NgbdAlertBasicComponent,
      //   data: {
      //     title: "Alert",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Alert" },
      //     ],
      //   },
      // },
      // {
      //   path: "carousel",
      //   component: NgbdCarouselBasicComponent,
      //   data: {
      //     title: "Carousel",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Carousel" },
      //     ],
      //   },
      // },
      // {
      //   path: "datepicker",
      //   component: NgbdDatepickerBasicComponent,
      //   data: {
      //     title: "Datepicker",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Datepicker" },
      //     ],
      //   },
      // },
      // {
      //   path: "dropdown",
      //   component: NgbdDropdownBasicComponent,
      //   data: {
      //     title: "Dropdown",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Dropdown" },
      //     ],
      //   },
      // },
      // {
      //   path: "modal",
      //   component: NgbdModalBasicComponent,
      //   data: {
      //     title: "Modal",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Modal" },
      //     ],
      //   },
      // },
      // {
      //   path: "poptool",
      //   component: NgbdPopTooltipComponent,
      //   data: {
      //     title: "Popover & Tooltip",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Popover & Tooltip" },
      //     ],
      //   },
      // },
      // {
      //   path: "rating",
      //   component: NgbdratingBasicComponent,
      //   data: {
      //     title: "Rating",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Rating" },
      //     ],
      //   },
      // },
      // {
      //   path: "tabs",
      //   component: NgbdtabsBasicComponent,
      //   data: {
      //     title: "Tabs",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Tabs" },
      //     ],
      //   },
      // },
      // {
      //   path: "timepicker",
      //   component: NgbdtimepickerBasicComponent,
      //   data: {
      //     title: "Timepicker",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Timepicker" },
      //     ],
      //   },
      // },
      // {
      //   path: "buttons",
      //   component: ButtonsComponent,
      //   data: {
      //     title: "Button",
      //     urls: [
      //       { title: "Dashboard", url: "/dashboard" },
      //       { title: "ngComponent" },
      //       { title: "Button" },
      //     ],
      //   },
      // },
      // {
      //   path: "toast",
      //   component: ToastComponent,
      //   data: {
      //     title: "Toast",
      //   },
      // },
    ],
  },
];
