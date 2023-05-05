import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from "./admin-layout.component";
import {HeaderComponent} from './header/header.component';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent
  ],
  exports: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ]
})
export class AdminLayoutModule {
}
