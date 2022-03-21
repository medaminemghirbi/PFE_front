import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersGardGuard } from './users-gard.guard';
import { AboutComponent } from './users/about/about.component';
import { ContactComponent } from './users/contact/contact.component';
import { FindFreelancerComponent } from './users/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './users/find-project/find-project.component';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch :'full'},
  {path : 'home' , component : HomeComponent},
  {path:'freelancer' , component:FindFreelancerComponent},
  {path:'project' , component:FindProjectComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,
  
  { path : 'register' , component:RegisterComponent } ,

  {path:'login' , component:LoginComponent } ,
  { path : 'dashboard' ,canActivate: [UsersGardGuard], component:DashboardAdminComponent  } , 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
