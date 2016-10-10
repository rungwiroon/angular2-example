import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customers';
import { HomeComponent } from './home';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', component: CustomerListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);