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
import { AddmissionComponent } from './client/addmission/addmission.component';
import { AllmissionsComponent } from './client/allmissions/allmissions.component';
import { DashbordClientComponent } from './client/dashbord-client/dashbord-client.component';
import { EditProfilClientComponent } from './client/edit-profil-client/edit-profil-client.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { EditFreelancerComponent } from './freelancer/edit-freelancer/edit-freelancer.component';
import { ExpEducationComponent } from './freelancer/exp-education/exp-education.component';
import { ExperianceComponent } from './freelancer/experiance/experiance.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
import { DetailfreelancerComponent } from './users/detailfreelancer/detailfreelancer.component';
import { FindFreelancerComponent } from './users/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './users/find-project/find-project.component';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  {path:'',  component : HomeComponent},
  {path:'freelancer' , component:FindFreelancerComponent},
  {path:'project' , component:FindProjectComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,

  { path : 'register' , component:RegisterComponent } ,
  {path:'login' ,  component:LoginComponent } ,
  {path:'dashboard'    , component:DashboardAdminComponent } ,
  { path : 'profil-admin' , component:ProfileAdminComponent  },
  { path : 'addcategory' , canActivate:[AuthGuard]    ,component:AddCategoryComponent} ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'missions' , canActivate:[AuthGuard]   ,component : MissionsComponent} ,
  {path:'allusers'  ,canActivate:[AuthGuard] , component:ListUsersComponent} ,
  {path:'allreviews' ,canActivate:[AuthGuard]   ,component:ReviewsComponent} ,
  
  { path:'Education', component:ExpEducationComponent},
  {path:'edit-freelancer' ,canActivate:[AuthGuard]  ,component:EditFreelancerComponent} ,
  {path:'dashbord-freelancer' ,canActivate:[AuthGuard]  ,component:DashbordFreelancerComponent} ,
  {path:'edit-client' ,canActivate:[AuthGuard]  ,component:EditProfilClientComponent} ,
  { path:'experiance', canActivate:[AuthGuard] ,component:ExperianceComponent},

  {path:"detailfreelancer/:id",component:DetailfreelancerComponent},
  {path:'dashbord-client',canActivate:[AuthGuard]  ,component:DashbordClientComponent},
  {path:"alllanguages",canActivate:[AuthGuard] ,component:AlllanguagesComponent},
  {path:"addmission",canActivate:[AuthGuard],component:AddmissionComponent},
  {path:"missions-client",canActivate:[AuthGuard],component:MissionsClientComponent},
  {path:"allmissions",canActivate:[AuthGuard],component:AllmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
