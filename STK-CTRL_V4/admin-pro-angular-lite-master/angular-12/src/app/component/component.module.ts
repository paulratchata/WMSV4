import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ComponentsRoutes } from "./component.routing";
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
import { ToastsContainer } from "./toast/toast-container";
import { SchedComponent } from "./import/sched/sched.component";
import { AddshipmentComponent } from "./import/addshipment/addshipment.component";
import { FumigationtableComponent } from "./import/fumigationtable/fumigationtable.component";
import { ExwarehouseComponent } from "./import/exwarehouse/exwarehouse.component";
import { ReadytounloadComponent } from "./import/exwarehouse/readytounload/readytounload.component";
import { StocktagsComponent } from "./stockcontrol/stocktags/stocktags.component";
import { StockonhandComponent } from "./stockcontrol/stockonhand/stockonhand.component";
import { CdrComponent } from "./stockcontrol/cdr/cdr.component";
import { IdrComponent } from "./stockcontrol/idr/idr.component";
import { InternaldamageComponent } from "./stockcontrol/internaldamage/internaldamage.component";
import { CustomerdamageComponent } from "./stockcontrol/customerdamage/customerdamage.component";
import { ExwhstockComponent } from "./import/exwarehouse/exwhstock/exwhstock.component";
import { UnloadComponent } from "./import/unload/unload.component";
import { UnloadingComponent } from "./import/unload/unloading/unloading.component";
import { UnloadreportComponent } from "./import/unload/unloadreport/unloadreport.component";
import { PrintstockTagComponent } from "./stockcontrol/printstock-tag/printstock-tag.component";
import { QRCodeModule } from "angularx-qrcode";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { NgxPrintModule } from "ngx-print";
import { StockscanComponent } from "./stockcontrol/stockscan/stockscan.component";
import { PalletComponent } from "./stockcontrol/pallet/pallet.component";
import { FocComponent } from "./stockcontrol/foc/foc.component";
import { AddcdrComponent } from "./stockcontrol/addcdr/addcdr.component";
import { UpdateCdrRecordComponent } from "./stockcontrol/update-cdr-record/update-cdr-record.component";
import { SalesordersComponent } from "./sales/salesorders/salesorders.component";
import { NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons } from "ngx-bootstrap-icons";
import { PendingdeliveryComponent } from "./logistics/pendingdelivery/pendingdelivery.component";
import { PrintdeliveryComponent } from "./logistics/printdelivery/printdelivery.component";
import { NgxBarcodeModule } from "ngx-barcode";

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/moment";
import * as moment from "moment";
import { ImportcalendarComponent } from './import/importcalendar/importcalendar.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}
@NgModule({
  imports: [
    CalendarModule,
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    NgxBarcodeModule,
    ReactiveFormsModule,
    NgbModule,
    QRCodeModule,
    NgxQRCodeModule,
    NgxPrintModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    ButtonsComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    SchedComponent,
    AddshipmentComponent,
    FumigationtableComponent,
    ExwarehouseComponent,
    ReadytounloadComponent,
    StocktagsComponent,
    StockonhandComponent,
    CdrComponent,
    IdrComponent,
    InternaldamageComponent,
    CustomerdamageComponent,
    ExwhstockComponent,
    UnloadComponent,
    UnloadingComponent,
    UnloadreportComponent,
    PrintstockTagComponent,
    StockscanComponent,
    PalletComponent,
    FocComponent,
    AddcdrComponent,
    UpdateCdrRecordComponent,
    SalesordersComponent,
    PendingdeliveryComponent,
    PrintdeliveryComponent,
    ImportcalendarComponent,
  ],
})
export class ComponentsModule {}
