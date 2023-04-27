import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: 'admin', component: AdminLayoutComponent,
    children:[
      {path: '', loadChildren: () => import('./views/admin-layout/admin-home/admin-home.module').then(m => m.AdminHomeModule)}
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
export class AppRoutingModule { }
