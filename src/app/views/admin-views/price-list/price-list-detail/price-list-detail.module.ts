import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceListDetailComponent} from "./price-list-detail.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    PriceListDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PriceListDetailComponent,
      }
    ]),
    ButtonModule,
    RippleModule,
    DialogModule,
    FormsModule,
    InputTextModule,
  ]
})
export class PriceListDetailModule {
}
