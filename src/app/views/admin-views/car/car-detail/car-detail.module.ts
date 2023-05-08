import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarDetailComponent} from "./car-detail.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarDetailComponent,
      }
    ]),
    ButtonModule,
    RippleModule,
    DialogModule,
    FormsModule,
    InputTextModule,
  ]
})
export class CarDetailModule { }
