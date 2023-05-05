import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";
import {ClientLayoutComponent} from "./views/client-layout/client-layout.component";

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/adminViews/admin-home/admin-home.module').then(m => m.AdminHomeModule)},
      {path: 'company', loadChildren: () => import('./views/adminViews/company/company.module').then(m => m.CompanyModule)},
      {path: 'office', loadChildren: () => import('./views/adminViews/office/office-list/office.module').then(m => m.OfficeModule)},
      {path: 'office/new', loadChildren: () => import('./views/adminViews/office/office-new/office-new.module').then(m => m.OfficeNewModule)},
      {path: 'office/:id', loadChildren: () => import('./views/adminViews/office/office-detail/office-detail.module').then(m => m.OfficeDetailModule)},
      {path: 'car', loadChildren: () => import('./views/adminViews/car/car-list/car-list.module').then(m => m.CarListModule)},
      {path: 'car/new', loadChildren: () => import('./views/adminViews/car/car-new/car-new.module').then(m => m.CarNewModule)},
      {path: 'car/:id', loadChildren: () => import('./views/adminViews/car/car-detail/car-detail.module').then(m => m.CarDetailModule)},
      {path: 'employee', loadChildren: () => import('./views/adminViews/employee/employee-list/employee-list.module').then(m => m.EmployeeListModule)},
      {path: 'employee/new', loadChildren: () => import('./views/adminViews/employee/employee-new/employee-new.module').then(m => m.EmployeeNewModule)},
      {path: 'employee/:id', loadChildren: () => import('./views/adminViews/employee/employee-detail/employee-detail.module').then(m => m.EmployeeDetailModule)},
      {path: 'client', loadChildren: () => import('./views/adminViews/client/client-list/client-list.module').then(m => m.ClientListModule)},
      {path: 'client/:id', loadChildren: () => import('./views/adminViews/client/client-detail/client-detail.module').then(m => m.ClientDetailModule)},
    ]
  },
  {path: 'client', component: ClientLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/clientViews/client-home/client-home.module').then(m => m.ClientHomeModule)},
    ]
  },
  {path: '', loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)},
  {path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)},
  {path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
