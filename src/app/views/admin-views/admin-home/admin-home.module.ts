import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminHomeComponent} from "./admin-home.component";
import {RouterModule} from "@angular/router";
import {PanelModule} from "primeng/panel";

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AdminHomeComponent,
            }
        ]),
        PanelModule
    ]
})
export class AdminHomeModule { }
