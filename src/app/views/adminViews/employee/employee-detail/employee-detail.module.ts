import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeDetailComponent} from "./employee-detail.component";
import {RouterModule} from "@angular/router";


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
  ]
})
export class EmployeeDetailModule { }
