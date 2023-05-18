import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";
import {ClientLayoutComponent} from "./views/client-layout/client-layout.component";
import {EmployeeLayoutComponent} from "./views/employee-layout/employee-layout.component";
import {AuthAdminGuard} from "./auth/guards/auth-admin.guard";
import {AuthClientGuard} from "./auth/guards/auth-client.guard";
import {AuthEmployeeGuard} from "./auth/guards/auth-employee.guard";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent, canActivate: [AuthAdminGuard],
    children: [
      {path: '', loadChildren: () => import('./views/admin-views/admin-home/admin-home.module').then(m => m.AdminHomeModule)},
      {path: 'company', loadChildren: () => import('./views/admin-views/company/company.module').then(m => m.CompanyModule)},
      {path: 'office', loadChildren: () => import('./views/admin-views/office/office-list/office.module').then(m => m.OfficeModule)},
      {path: 'office/new', loadChildren: () => import('./views/admin-views/office/office-new/office-new.module').then(m => m.OfficeNewModule)},
      {path: 'office/:id', loadChildren: () => import('./views/admin-views/office/office-detail/office-detail.module').then(m => m.OfficeDetailModule)},
      {path: 'car', loadChildren: () => import('./views/admin-views/car/car-list/car-list.module').then(m => m.CarListModule)},
      {path: 'car/new', loadChildren: () => import('./views/admin-views/car/car-new/car-new.module').then(m => m.CarNewModule)},
      {path: 'car/:id', loadChildren: () => import('./views/admin-views/car/car-detail/car-detail.module').then(m => m.CarDetailModule)},
      {path: 'employee', loadChildren: () => import('./views/admin-views/employee/employee-list/employee-list.module').then(m => m.EmployeeListModule)},
      {path: 'employee/new', loadChildren: () => import('./views/admin-views/employee/employee-new/employee-new.module').then(m => m.EmployeeNewModule)},
      {path: 'employee/:id', loadChildren: () => import('./views/admin-views/employee/employee-detail/employee-detail.module').then(m => m.EmployeeDetailModule)},
      {path: 'client', loadChildren: () => import('./views/admin-views/client/client-list/client-list.module').then(m => m.ClientListModule)},
      {path: 'client/:id', loadChildren: () => import('./views/admin-views/client/client-detail/client-detail.module').then(m => m.ClientDetailModule)},
      {path: 'notfound', component: NotFoundComponent},
      {path: '**', redirectTo: 'notfound'}
    ]
  },
  {path: 'client', component: ClientLayoutComponent, canActivate: [AuthClientGuard],
    children: [
      {path: '', loadChildren: () => import('./views/client-views/client-home/client-home.module').then(m => m.ClientHomeModule)},
      {path: 'reservation', loadChildren: () => import('./views/client-views/reservation/reservation-list/reservation-list.module').then(m => m.ReservationListModule)},
      {path: 'reservation/new', loadChildren: () => import('./views/client-views/reservation/reservation-new/reservation-new.module').then(m => m.ReservationNewModule)},
      {path: 'notfound', component: NotFoundComponent},
      {path: '**', redirectTo: 'notfound'}
    ]
  },
  {path: 'employee', component: EmployeeLayoutComponent, canActivate: [AuthEmployeeGuard],
    children: [
      {path: '', loadChildren: () => import('./views/employee-views/employee-home/employee-home.module').then(m => m.EmployeeHomeModule)},
      {path: 'pickup', loadChildren: () => import('./views/employee-views/pick-up/pick-up.module').then(m => m.PickUpModule)},
      {path: 'return', loadChildren: () => import('./views/employee-views/return/return.module').then(m => m.ReturnModule)},
      {path: 'notfound', component: NotFoundComponent},
      {path: '**', redirectTo: 'notfound'}
    ]
  },
  {path: '', pathMatch: "full", redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
