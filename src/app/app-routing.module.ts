import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
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
  { path : 'profil-admin' , component:ProfileAdminComponent  },
  { path : 'register' , component:RegisterComponent } ,
  {path:'dashboard' ,canActivate:[AuthGuard], component:DashboardAdminComponent } ,
  {path:'login' , component:LoginComponent } ,
  { path : 'profil-client' , component:ProfilClientComponent  },
  { path : 'profil-freelancer' , component:ProfilFreelancerComponent  } , 
  { path : 'addcategory',component:AddCategoryComponent} ,
  { path : 'categories',component : CategoriesComponent} ,
  { path : 'missions',component : MissionsComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
