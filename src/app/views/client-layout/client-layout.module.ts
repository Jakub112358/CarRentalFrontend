import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientLayoutComponent} from "./client-layout.component";
import {MenubarModule} from "primeng/menubar";
import {ClientHeaderComponent} from './client-header/client-header.component';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    ClientHeaderComponent
  ],
  exports: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ]
})
export class ClientLayoutModule {
}
