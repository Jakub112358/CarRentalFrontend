import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationNewComponent} from "./reservation-new.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CalendarModule} from "primeng/calendar";


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
    CalendarModule
  ]
})
export class ReservationNewModule {
}
