import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReservationDetailComponent} from "./reservation-detail.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    ReservationDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReservationDetailComponent,
      }
    ]),
    ButtonModule,
    RippleModule,
    DialogModule,
    FormsModule,
    InputTextModule,
  ]
})
export class ReservationDetailModule {
}
