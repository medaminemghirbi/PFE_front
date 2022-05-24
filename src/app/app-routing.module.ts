import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AlllanguagesComponent } from './admin/alllanguages/alllanguages.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { ActiveMissionsClientComponent } from './client/active-missions-client/active-missions-client.component';
import { AddmissionComponent } from './client/addmission/addmission.component';
import { AllmissionsComponent } from './client/allmissions/allmissions.component';
import { CalendarComponent } from './client/calendar/calendar.component';
import { DashbordClientComponent } from './client/dashbord-client/dashbord-client.component';
import { DiscuterFreelancerComponent } from './client/discuter-freelancer/discuter-freelancer.component';
import { DiscuterComponent } from './client/discuter/discuter.component';
import { EditProfilClientComponent } from './client/edit-profil-client/edit-profil-client.component';
import { EndedMissionsClientComponent } from './client/ended-missions-client/ended-missions-client.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { PostulatedMissionsClientComponent } from './client/postulated-missions-client/postulated-missions-client.component';
import { ActiveMissionsFreelancerComponent } from './freelancer/active-missions-freelancer/active-missions-freelancer.component';
import { AddLanguagesComponent } from './freelancer/add-languages/add-languages.component';
import { CvComponent } from './freelancer/cv/cv.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { DiscuterClientComponent } from './freelancer/discuter-client/discuter-client.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { EndedMissionsFreelancerComponent } from './freelancer/ended-missions-freelancer/ended-missions-freelancer.component';
import { ExpEducationComponent } from './freelancer/exp-education/exp-education.component';
import { ExperianceComponent } from './freelancer/experiance/experiance.component';
import { FavorisComponent } from './freelancer/favoris/favoris.component';
import { GeneratecvComponent } from './freelancer/generatecv/generatecv.component';
import { MissionsFreelancerComponent } from './freelancer/missions-freelancer/missions-freelancer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
import { DetailClientComponent } from './users/detail-client/detail-client.component';
import { DetailfreelancerComponent } from './users/detailfreelancer/detailfreelancer.component';
import { DetailmissionComponent } from './users/detailmission/detailmission.component';
import { FindFreelancerComponent } from './users/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './users/find-project/find-project.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { HomeComponent } from './users/home/home.component';
import { MissionbycategoryComponent } from './users/missionbycategory/missionbycategory.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',  component : HomeComponent},
  {path:'freelancer' , component:FindFreelancerComponent},
  {path:'project' , component:FindProjectComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,
  {path:'missionbycategoryhome/:id' , component:MissionbycategoryComponent } ,
  
  { path : 'register' , component:RegisterComponent } ,
  {path:'login' ,  component:LoginComponent } ,
  {path:'dashboard'    , canActivate:[AuthGuard], component:DashboardAdminComponent } ,
  { path : 'profil-admin', canActivate:[AuthGuard], component:ProfileAdminComponent  },
  { path : 'addcategory' , canActivate:[AuthGuard]    ,component:AddCategoryComponent} ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'missions' , canActivate:[AuthGuard]   ,component : MissionsComponent} ,
  {path:'allusers'  ,canActivate:[AuthGuard] , component:ListUsersComponent} ,
  {path:'allreviews' ,canActivate:[AuthGuard]   ,component:ReviewsComponent} ,
  
  { path:'Education', canActivate:[AuthGuard], component:ExpEducationComponent},
  {path:'edit-freelancer' ,canActivate:[AuthGuard]  ,component:EditFreelancerComponent} ,
  {path:'dashbord-freelancer' ,canActivate:[AuthGuard]  ,component:DashbordFreelancerComponent} ,
  {path:'edit-client' ,canActivate:[AuthGuard]  ,component:EditProfilClientComponent} ,
  { path:'experiance', canActivate:[AuthGuard] ,component:ExperianceComponent},

  {path:"detailfreelancer/:id",component:DetailfreelancerComponent},
  {path:"generatecv/:id",component:GeneratecvComponent},
  {path:'dashbord-client',canActivate:[AuthGuard]  ,component:DashbordClientComponent},
  {path:"alllanguages",canActivate:[AuthGuard] ,component:AlllanguagesComponent},
  {path:"addmission",canActivate:[AuthGuard],component:AddmissionComponent},
  {path:"missions-client",canActivate:[AuthGuard],component:MissionsClientComponent},
  {path:"allmissions",canActivate:[AuthGuard],component:AllmissionsComponent},
  { path : 'postulated-missions-client' ,canActivate:[AuthGuard]  , component:PostulatedMissionsClientComponent  },
  { path:'missions-freelancer', canActivate:[AuthGuard]  , component:MissionsFreelancerComponent},
  { path : 'active-missions-freelancer' ,canActivate:[AuthGuard]  , component:ActiveMissionsFreelancerComponent},
  { path : 'ended-missions-freelancer' ,canActivate:[AuthGuard]  , component:EndedMissionsFreelancerComponent},
  { path : 'active-missions-client' ,canActivate:[AuthGuard]  , component:ActiveMissionsClientComponent},
  { path : 'ended-missions-client' ,canActivate:[AuthGuard]  , component:EndedMissionsClientComponent},
  {path:'cv/:id', canActivate:[AuthGuard]  ,component:CvComponent},
  { path:'detail-client/:id', canActivate:[AuthGuard]  , component:DetailClientComponent },
  { path:'detail-mission/:id', component:DetailmissionComponent },
  {path:'reset/:token', component: ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  { path:'languages', canActivate:[AuthGuard]  , component:AddLanguagesComponent},
  { path:'favoris' , canActivate:[AuthGuard]  ,  component:FavorisComponent},

  { path:'calendar' , canActivate:[AuthGuard]  ,  component:CalendarComponent},
  { path:'discuter/:id' , canActivate:[AuthGuard]  ,  component:DiscuterComponent},

  {path:'discuterfreelancer/:id' , canActivate:[AuthGuard]  , component:DiscuterFreelancerComponent } , 

  {path:'discuterClient/:id' , canActivate:[AuthGuard]  , component:DiscuterClientComponent } , 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
