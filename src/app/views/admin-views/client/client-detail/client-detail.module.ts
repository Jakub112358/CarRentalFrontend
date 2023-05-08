import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailComponent} from "./client-detail.component";
import {RouterModule} from "@angular/router";

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
  ]
})
export class ClientDetailModule {
}
