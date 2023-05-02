import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminLayoutModule} from "./views/admin-layout/admin-layout.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OfficeDetailComponent} from './views/adminViews/office/office-detail/office-detail.component';
import {OfficeNewComponent} from './views/adminViews/office/office-new/office-new.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    AppComponent,
    OfficeDetailComponent,
    OfficeNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
