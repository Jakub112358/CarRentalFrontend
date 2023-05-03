import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeListComponent} from "./employee-list.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeListComponent,
      }
    ]),
    TableModule,
    ButtonModule,
    RippleModule,
  ]
})
export class EmployeeListModule { }
