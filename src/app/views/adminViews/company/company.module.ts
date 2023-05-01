import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyComponent,
      }
    ]),
    CardModule,
    RippleModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
