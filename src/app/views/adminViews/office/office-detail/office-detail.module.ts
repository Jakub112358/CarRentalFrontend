import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficeDetailComponent} from "./office-detail.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    OfficeDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OfficeDetailComponent,
      }
    ]),
  ]
})
export class OfficeDetailModule { }
