import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationListComponent} from "./reservation-list.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReservationListComponent
      }]
    ),
    TableModule,
    ButtonModule,
    RippleModule,
  ]
})
export class ReservationListModule {
}
