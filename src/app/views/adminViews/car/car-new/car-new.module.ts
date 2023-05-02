import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarNewComponent} from "./car-new.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [CarNewComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CarNewComponent,
            }
        ]),
        FormsModule,
        DialogModule,
        ButtonModule,
        RippleModule,
        DropdownModule,
    ]
})
export class CarNewModule { }
