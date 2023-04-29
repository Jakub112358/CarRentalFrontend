import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from "./admin-layout.component";
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";



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
    MenuModule
  ]
})
export class AdminLayoutModule { }
