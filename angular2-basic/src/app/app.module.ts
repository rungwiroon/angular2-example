import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CustomerListComponent, CustomerCreateComponent, CustomerService } from './customers';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapPageComponent } from './maps/map-page/map-page.component';

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
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    NgbModule.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpmpEN20yatLL8QnTd4PEhqPikaXPi4_U'
    })
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
