import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeNewComponent} from "./employee-new.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    EmployeeNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeNewComponent,
      }
    ]),
    FormsModule,
    ButtonModule,
    RippleModule,
    DialogModule,
  ]
})
export class EmployeeNewModule { }
