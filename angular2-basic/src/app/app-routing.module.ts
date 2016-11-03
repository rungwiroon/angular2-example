import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './auth'

import { HomeComponent } from './home';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent } from './customers';
import { MapPageComponent } from './maps';
import { LoginComponent } from './login'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'customer/create', component: CustomerCreateComponent, canActivate: [AuthGuard] },
  { path: 'customer/update/:id', component: CustomerUpdateComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
