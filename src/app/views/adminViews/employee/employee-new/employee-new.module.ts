import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeNewComponent} from "./employee-new.component";
import {RouterModule} from "@angular/router";


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
  ]
})
export class EmployeeNewModule { }
