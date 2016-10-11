import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CustomerListComponent } from './customers';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', component: CustomerListComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);