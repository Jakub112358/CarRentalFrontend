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
import {TokenInterceptor} from "./auth/token-interceptor.service";
import { RegisterComponent } from './views/register/register.component';
import {LoginComponent} from "./views/login/login.component";
import {InputTextModule} from "primeng/inputtext";
import {NotFoundComponent} from "./views/not-found/not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
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
    DialogModule,
    InputTextModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
