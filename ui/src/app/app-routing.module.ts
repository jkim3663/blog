import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { authGuard } from './auth/auth.guard';
import { preventBackGuard } from './auth/prevent-back.guard';
import { DelpostComponent } from './delpost/delpost.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent, canActivate: [authGuard], canDeactivate: [preventBackGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'delete', component: DelpostComponent},
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
