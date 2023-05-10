import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PickUpComponent} from "./pick-up.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { PickUpEditComponent } from './pick-up-edit/pick-up-edit.component';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    PickUpComponent,
    PickUpEditComponent
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
    FormsModule,
    CalendarModule,
  ]
})
export class PickUpModule {
}
