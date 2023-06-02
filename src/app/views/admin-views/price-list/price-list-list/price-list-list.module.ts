import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceListListComponent} from "./price-list-list.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    PriceListListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PriceListListComponent,
      }
    ]),
    TableModule,
    ButtonModule,
    RippleModule,
  ]
})
export class PriceListListModule {
}
