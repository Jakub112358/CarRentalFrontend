import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminLayoutModule} from "./views/admin-layout/admin-layout.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ClientLayoutModule} from "./views/client-layout/client-layout.module";
import {EmployeeLayoutModule} from "./views/employee-layout/employee-layout.module";
import {TokenInterceptor} from "./service/auth/token-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    ClientLayoutModule,
    EmployeeLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
