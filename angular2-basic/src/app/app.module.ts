import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CustomerListComponent, CustomerService } from './customers';

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
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
