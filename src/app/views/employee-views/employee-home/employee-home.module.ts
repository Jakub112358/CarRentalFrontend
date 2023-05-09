import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeHomeComponent} from "./employee-home.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    EmployeeHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeHomeComponent,
      }
    ]),
  ]
})
export class EmployeeHomeModule {
}
