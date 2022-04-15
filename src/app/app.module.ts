import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './users/home/home.component';

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

import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { CookieService } from 'ngx-cookie-service';
import { CategoriesComponent } from './admin/categories/categories.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { SideBarrComponent } from './freelancer/side-barr/side-barr.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { ExpEducationComponent } from './freelancer/exp-education/exp-education.component';
import { ExperianceComponent } from './freelancer/experiance/experiance.component';
import { DashbordClientComponent } from './client/dashbord-client/dashbord-client.component';
import { SideebarrComponent } from './client/sideebarr/sideebarr.component';
import { EditProfilClientComponent } from './client/edit-profil-client/edit-profil-client.component';
import { DetailfreelancerComponent } from './users/detailfreelancer/detailfreelancer.component';
import { UsersnavbarComponent } from './users/usersnavbar/usersnavbar.component';
import { FreelancernavbarComponent } from './freelancer/freelancernavbar/freelancernavbar.component';

import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { ClientnavbarComponent } from './client/clientnavbar/clientnavbar.component';
import { AlllanguagesComponent } from './admin/alllanguages/alllanguages.component';
import { AddmissionComponent } from './client/addmission/addmission.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { AllmissionsComponent } from './client/allmissions/allmissions.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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


    AddCategoryComponent,
    ListUsersComponent,
    CategoriesComponent,
    MissionsComponent,
    ReviewsComponent,

    EditFreelancerComponent,
    SideBarrComponent,
    DashbordFreelancerComponent,
    ExpEducationComponent,
    ExperianceComponent,
    DashbordClientComponent,
    SideebarrComponent,
    
    EditProfilClientComponent,

    DetailfreelancerComponent,
     UsersnavbarComponent,
     FreelancernavbarComponent,
     ClientnavbarComponent,
     AdminnavbarComponent,
     AlllanguagesComponent,
     AddmissionComponent,
     MissionsClientComponent,
     AllmissionsComponent,
     

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
    ReactiveFormsModule,
    
    NgSelectModule
    
    
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
