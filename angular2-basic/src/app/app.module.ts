import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DataTableModule } from 'angular-2-data-table';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard, AuthService } from './auth';
import { HeaderEventManager } from './shared/headerEventManager';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent } from './customers';
import { MapPageComponent } from './maps/map-page/map-page.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee';

/*import {
  AppComponent,
  HomeComponent,
  HeaderComponent
} from './'*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    MapPageComponent,
    LoginComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCL4pxp4YCyVhThEWIQl2HVZOvOpOGnd6k'
    })
  ],
  providers: [AuthGuard, AuthService, HeaderEventManager],
  bootstrap: [AppComponent]
})

export class AppModule { }
