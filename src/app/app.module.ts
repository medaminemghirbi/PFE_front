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

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { NavbarrComponent } from './admin/navbarr/navbarr.component';
import { ProfilClientComponent } from './client/profil-client/profil-client.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { CookieService } from 'ngx-cookie-service';
import { CategoriesComponent } from './admin/categories/categories.component';
import { MissionsComponent } from './admin/missions/missions.component';



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
    RegisterComponent,
    ProfileAdminComponent,
    SideBarComponent,
    NavbarrComponent,

    ProfilClientComponent,
    ProfilFreelancerComponent,
    AddCategoryComponent,
    ListUsersComponent,
    CategoriesComponent,
    MissionsComponent ,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FontAwesomeModule,
    CardModule,
    ButtonModule ,
    FormsModule , 
    MDBBootstrapModule,
    ReactiveFormsModule
    
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
