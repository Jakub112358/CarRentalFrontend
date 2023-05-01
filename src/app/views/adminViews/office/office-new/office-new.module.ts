import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OfficeNewComponent} from "./office-new.component";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OfficeNewComponent,
      }
    ]),
  ]
})
export class OfficeNewModule { }
