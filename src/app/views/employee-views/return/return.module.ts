import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReturnComponent} from "./return.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { ReturnEditComponent } from './return-edit/return-edit.component';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    ReturnComponent,
    ReturnEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReturnComponent,
      }
    ]),
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    CalendarModule,
  ]
})
export class ReturnModule {
}
