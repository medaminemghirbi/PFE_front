import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './users/home/home.component';
import { NavbarComponent } from './users/navbar/navbar.component';
import { FooterComponent } from './users/footer/footer.component';
import { FindFreelancerComponent } from './users/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './users/find-project/find-project.component';
import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FindFreelancerComponent,
    FindProjectComponent,
    AboutComponent,
    ContactComponent ,
    LoginComponent,
    DashboardAdminComponent,
    RegisterComponent ,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FontAwesomeModule,
    CardModule,
    ButtonModule ,
    FormsModule , 
    MDBBootstrapModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
