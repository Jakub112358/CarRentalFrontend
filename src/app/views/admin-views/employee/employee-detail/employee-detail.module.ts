import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeDetailComponent} from "./employee-detail.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailComponent,
      }
    ]),
    ButtonModule,
    RippleModule,
    DialogModule,
    InputTextModule,
    FormsModule,
  ]
})
export class EmployeeDetailModule { }
