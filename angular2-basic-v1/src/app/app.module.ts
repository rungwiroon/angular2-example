import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';

//const appRoutes: Routes = [
  // เราจะนิยาม Route หรือเส้นทางของเราในนี้
  // เช่น
  // { path: 'pages', component: PageListComponent },
  // เพื่อบอกว่าเมื่อไหร่ที่เข้ามาจาก /pages ให้วิ่งไปใช้บริการคอมโพแนนท์ชื่อ PageListComponent 
//]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
