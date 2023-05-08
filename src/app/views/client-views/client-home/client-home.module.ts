import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientHomeComponent} from "./client-home.component";
import {RouterModule} from "@angular/router";

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
  ]
})
export class ClientHomeModule {
}
