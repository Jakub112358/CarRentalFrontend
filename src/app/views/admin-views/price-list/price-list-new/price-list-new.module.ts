import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PriceListNewComponent} from "./price-list-new.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    PriceListNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PriceListNewComponent,
      }
    ]),
    ButtonModule,
    RippleModule,
    FormsModule,
    DialogModule,
  ]
})
export class PriceListNewModule {
}
