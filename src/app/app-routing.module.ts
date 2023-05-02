import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/adminViews/admin-home/admin-home.module').then(m => m.AdminHomeModule)},
      {path: 'company', loadChildren: () => import('./views/adminViews/company/company.module').then(m => m.CompanyModule)},
      {path: 'office', loadChildren: () => import('./views/adminViews/office/office-list/office.module').then(m => m.OfficeModule)},
      {path: 'office/new', loadChildren: () => import('./views/adminViews/office/office-new/office-new.module').then(m => m.OfficeNewModule)},
      {path: 'car', loadChildren: () => import('./views/adminViews/car/car-list/car-list.module').then(m => m.CarListModule)},
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
