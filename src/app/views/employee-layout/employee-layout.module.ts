import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeLayoutComponent} from "./employee-layout.component";
import {EmployeeHeaderComponent} from './employee-header/employee-header.component';
import {RouterOutlet} from "@angular/router";
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    EmployeeHeaderComponent
  ],
  exports: [
    EmployeeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MenubarModule
  ]
})
export class EmployeeLayoutModule {
}
