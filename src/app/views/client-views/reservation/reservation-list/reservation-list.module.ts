import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationListComponent} from "./reservation-list.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ReservationDetailComponent} from "./reservation-detail/reservation-detail.component";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationDetailComponent
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
        DialogModule,
    ]
})
export class ReservationListModule {
}
