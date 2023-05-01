import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    OfficeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: OfficeComponent,
            }
        ]),
        TableModule
    ]
})
export class OfficeModule { }
