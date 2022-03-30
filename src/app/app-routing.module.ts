import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { ProfilClientComponent } from './client/profil-client/profil-client.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
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
  {path:'login' , component:LoginComponent } ,

  {path:'dashboard'  ,canActivate:[AuthGuard]   , component:DashboardAdminComponent } ,
  { path : 'profil-admin' ,canActivate:[AuthGuard]  , component:ProfileAdminComponent  },
  { path : 'addcategory' , canActivate:[AuthGuard]    ,component:AddCategoryComponent} ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'missions' , canActivate:[AuthGuard]   ,component : MissionsComponent} ,
  {path:'allusers'  ,canActivate:[AuthGuard] , component:ListUsersComponent} ,
  {path:'allreviews' ,canActivate:[AuthGuard]   ,component:ReviewsComponent} ,
  
  { path : 'profil-client' ,canActivate:[AuthGuard]  , component:ProfilClientComponent  },

  { path : 'profil-freelancer' ,canActivate:[AuthGuard]  , component:ProfilFreelancerComponent  } , 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
