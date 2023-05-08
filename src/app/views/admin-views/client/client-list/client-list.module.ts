import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientListComponent} from "./client-list.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientListComponent,
      }
    ]),
    TableModule,
    ButtonModule,
    RippleModule,
  ]
})
export class ClientListModule {
}
