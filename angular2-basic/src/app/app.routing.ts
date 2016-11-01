import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent } from './customers';
import { MapPageComponent } from './maps'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/create', component: CustomerCreateComponent },
    { path: 'customer/update/:id', component: CustomerUpdateComponent },
    { path: 'map', component: MapPageComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);