import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';

import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { LanguagesComponent } from './admin/languages/languages.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { ChatComponent } from './chat/chat.component';
import { ActiveMissionsClientComponent } from './client/active-missions-client/active-missions-client.component';
import { AddMissionComponent } from './client/add-mission/add-mission.component';

import { DashboardClientComponent } from './client/dashboard-client/dashboard-client.component';
import { EndedMissionsClientComponent } from './client/ended-missions-client/ended-missions-client.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { PayfreelancerComponent } from './client/payfreelancer/payfreelancer.component';
import { PostulatedMissionsClientComponent } from './client/postulated-missions-client/postulated-missions-client.component';
import { ProfilClientComponent } from './client/profil-client/profil-client.component';
import { ActiveMissionsFreelancerComponent } from './freelancer/active-missions-freelancer/active-missions-freelancer.component';
import { AddLanguagesComponent } from './freelancer/add-languages/add-languages.component';

import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { EndedMissionsFreelancerComponent } from './freelancer/ended-missions-freelancer/ended-missions-freelancer.component';
import { ExpEducationComponent } from './freelancer/exp-education/exp-education.component';
import { ExperianceComponent } from './freelancer/experiance/experiance.component';
import { FavorisComponent } from './freelancer/favoris/favoris.component';
import { MissionsFreelancerComponent } from './freelancer/missions-freelancer/missions-freelancer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
import { DetailClientComponent } from './users/detail-client/detail-client.component';
import { DetailFreelancerComponent } from './users/detail-freelancer/detail-freelancer.component';
import { DetailMissionComponent } from './users/detail-mission/detail-mission.component';
import { FindFreelancerComponent } from './users/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './users/find-project/find-project.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { GeneratecvComponent } from './users/generatecv/generatecv.component';
import { HomeComponent } from './users/home/home.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',  component : HomeComponent},
  {path:'freelancer' , component:FindFreelancerComponent},
  {path:'project' /*,canActivate:[AuthGuard] */ , component:FindProjectComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,

  {path:'chat' , canActivate:[AuthGuard]  , component:ChatComponent } , 

  { path : 'register' , component:RegisterComponent } ,
  {path:'login' ,  component:LoginComponent } ,
  {path:'dashboard'    , canActivate:[AuthGuard]  , component:DashboardAdminComponent } ,
  { path : 'profil-admin' , canActivate:[AuthGuard]  , component:ProfileAdminComponent  },
  { path : 'addcategory' , canActivate:[AuthGuard]    ,component:AddCategoryComponent} ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'missions' , canActivate:[AuthGuard]   ,component : MissionsComponent} ,
  {path:'allusers'  ,canActivate:[AuthGuard] , component:ListUsersComponent} ,
  {path:'allreviews' ,canActivate:[AuthGuard]   ,component:ReviewsComponent} ,
  {path:'alllanguages' ,canActivate:[AuthGuard]   ,component:LanguagesComponent} ,



  { path : 'dashboard-client' ,canActivate:[AuthGuard]  , component:DashboardClientComponent  },
  { path : 'profil-client' ,canActivate:[AuthGuard]  , component:ProfilClientComponent  },
  { path : 'missions-client' ,canActivate:[AuthGuard]  , component:MissionsClientComponent  },
  { path : 'addMission' ,canActivate:[AuthGuard]  , component:AddMissionComponent  },
  { path : 'postulated-missions-client' ,canActivate:[AuthGuard]  , component:PostulatedMissionsClientComponent  },
  { path : 'active-missions-client' ,canActivate:[AuthGuard]  , component:ActiveMissionsClientComponent},
  { path : 'ended-missions-client' ,canActivate:[AuthGuard]  , component:EndedMissionsClientComponent},
  { path:'detail-client/:id', canActivate:[AuthGuard]  , component:DetailClientComponent },

  { path:'detail-mission/:id', canActivate:[AuthGuard]  , component:DetailMissionComponent },
  { path:'pay-freelancer/:id', canActivate:[AuthGuard]  , component:PayfreelancerComponent },


  { path:'Education' , canActivate:[AuthGuard]  ,  component:ExpEducationComponent},
  {path:'edit-freelancer' ,canActivate:[AuthGuard]  ,component:EditFreelancerComponent} ,
  {path:'dashboard-freelancer' ,canActivate:[AuthGuard]  ,component:DashbordFreelancerComponent} ,
  { path:'experiance', canActivate:[AuthGuard]  , component:ExperianceComponent},
  { path:'missions-freelancer', canActivate:[AuthGuard]  , component:MissionsFreelancerComponent},
  { path:'detail-freelancer/:id', canActivate:[AuthGuard]  , component:DetailFreelancerComponent },
  { path : 'active-missions-freelancer' ,canActivate:[AuthGuard]  , component:ActiveMissionsFreelancerComponent},
  { path : 'ended-missions-freelancer' ,canActivate:[AuthGuard]  , component:EndedMissionsFreelancerComponent},
  { path:'languages', canActivate:[AuthGuard]  , component:AddLanguagesComponent},
  { path:'favoris' , canActivate:[AuthGuard]  ,  component:FavorisComponent},

    {path:'reset/:token', component: ResetPasswordComponent },
    {path:'forgot-password',component:ForgotPasswordComponent } ,

    {path:'generatecv/:id',component:GeneratecvComponent  } ,
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }