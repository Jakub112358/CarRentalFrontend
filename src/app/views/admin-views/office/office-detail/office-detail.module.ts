import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficeDetailComponent} from "./office-detail.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    OfficeDetailComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: OfficeDetailComponent,
            }
        ]),
        ButtonModule,
        RippleModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        TableModule,
    ]
})
export class OfficeDetailModule { }
