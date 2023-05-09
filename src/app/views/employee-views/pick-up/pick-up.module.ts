import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PickUpComponent} from "./pick-up.component";


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
  ]
})
export class PickUpModule {
}
