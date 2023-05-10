import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PickUpComponent} from "./pick-up.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    PickUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PickUpComponent,
      }
    ]),
    TableModule,
    ButtonModule,
    RippleModule,
  ]
})
export class PickUpModule {
}
