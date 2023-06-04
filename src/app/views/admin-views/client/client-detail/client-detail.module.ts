import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailComponent} from "./client-detail.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientDetailComponent,
      }
    ]),
    ButtonModule,
    RippleModule,
    DialogModule,
    InputTextModule,
    FormsModule,
  ]
})
export class ClientDetailModule {
}
