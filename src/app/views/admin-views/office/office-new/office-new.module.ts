import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OfficeNewComponent} from "./office-new.component";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";




@NgModule({
  declarations: [
    OfficeNewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OfficeNewComponent,
      }
    ]),
    FormsModule,
    DialogModule,
    ButtonModule,
    RippleModule,
  ]
})
export class OfficeNewModule { }
