import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientHomeComponent} from "./client-home.component";
import {RouterModule} from "@angular/router";
import {PanelModule} from "primeng/panel";

@NgModule({
  declarations: [
    ClientHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientHomeComponent,
      }
    ]),
    PanelModule,
  ]
})
export class ClientHomeModule {
}
