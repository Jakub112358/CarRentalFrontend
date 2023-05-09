import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReturnComponent} from "./return.component";


@NgModule({
  declarations: [
    ReturnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReturnComponent,
      }
    ]),
  ]
})
export class ReturnModule {
}
