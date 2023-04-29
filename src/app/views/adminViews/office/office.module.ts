import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import {RouterModule} from "@angular/router";



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
    ])
  ]
})
export class OfficeModule { }
