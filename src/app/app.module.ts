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
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { CookieService } from 'ngx-cookie-service';
import { CategoriesComponent } from './admin/categories/categories.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { NavBarrComponent } from './freelancer/nav-barr/nav-barr.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { SideBarrComponent } from './freelancer/side-barr/side-barr.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { ExpEducationComponent } from './freelancer/exp-education/exp-education.component';
import { ExperianceComponent } from './freelancer/experiance/experiance.component';
import { NavbarclientComponent } from './client/navbarclient/navbarclient.component';
import { SidebarclientComponent } from './client/sidebarclient/sidebarclient.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { AddMissionComponent } from './client/add-mission/add-mission.component';
import { DashboardClientComponent } from './client/dashboard-client/dashboard-client.component';

import { LanguagesComponent } from './admin/languages/languages.component';
import { MissionsFreelancerComponent } from './freelancer/missions-freelancer/missions-freelancer.component';
import { DetailFreelancerComponent } from './users/detail-freelancer/detail-freelancer.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { PostulatedMissionsClientComponent } from './client/postulated-missions-client/postulated-missions-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActiveMissionsClientComponent } from './client/active-missions-client/active-missions-client.component';
import { EndedMissionsClientComponent } from './client/ended-missions-client/ended-missions-client.component';
import { ActiveMissionsFreelancerComponent } from './freelancer/active-missions-freelancer/active-missions-freelancer.component';
import { EndedMissionsFreelancerComponent } from './freelancer/ended-missions-freelancer/ended-missions-freelancer.component';
import { DetailMissionComponent } from './users/detail-mission/detail-mission.component';
import { DetailClientComponent } from './users/detail-client/detail-client.component';
import { ChatComponent } from './chat/chat.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { AddLanguagesComponent } from './freelancer/add-languages/add-languages.component';
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
    NavbarrComponent,    /// admin
    ProfilClientComponent,
    AddCategoryComponent,
    ListUsersComponent,
    CategoriesComponent,
    MissionsComponent,  /// admin 
    ReviewsComponent,
    NavBarrComponent,   /// freelancer
    EditFreelancerComponent,
    SideBarrComponent,
    DashbordFreelancerComponent,
    ExpEducationComponent,
    ExperianceComponent,
    NavbarclientComponent,   /// client
    SidebarclientComponent ,
    MissionsClientComponent ,
    AddMissionComponent ,
    DashboardClientComponent,
    LanguagesComponent,
    MissionsFreelancerComponent,
    DetailFreelancerComponent,
    PostulatedMissionsClientComponent,
    ActiveMissionsClientComponent,
    EndedMissionsClientComponent,
    ActiveMissionsFreelancerComponent,
    EndedMissionsFreelancerComponent,
    DetailMissionComponent,
    DetailClientComponent,
    ChatComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AddLanguagesComponent ,
 
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
    ReactiveFormsModule ,
    Ng2SearchPipeModule ,
    NgSelectModule ,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }