import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { FindFreelancerComponent } from './user/find-freelancer/find-freelancer.component';
import { FindProjectComponent } from './user/find-project/find-project.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'freelacer' , component:FindFreelancerComponent},
  {path:'project' , component:FindProjectComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
