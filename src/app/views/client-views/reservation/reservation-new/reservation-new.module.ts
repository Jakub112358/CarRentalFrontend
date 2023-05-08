import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationNewComponent} from "./reservation-new.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    ReservationNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReservationNewComponent
      }]
    ),
    FormsModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    TableModule,
    DialogModule,
    InputTextModule
  ]
})
export class ReservationNewModule {
}
