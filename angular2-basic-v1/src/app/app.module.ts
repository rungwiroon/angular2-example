import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { Routes, RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HeaderComponent } from './shared';
import { CustomerListComponent, CustomerService } from './customers';

//const appRoutes: Routes = [
  
//]

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
    routing
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
