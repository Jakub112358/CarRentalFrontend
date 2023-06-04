import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeHomeComponent} from "./employee-home.component";
import {RouterModule} from "@angular/router";
import {PanelModule} from "primeng/panel";


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
        PanelModule,
    ]
})
export class EmployeeHomeModule {
}
