import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Freelancer } from 'src/app/model/freelancer.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FreelancersService } from 'src/app/services/freelancers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageError:any
  constructor(private freelancersService:FreelancersService,private route:Router) { }

  ngOnInit(): void {
  }


  public loggedUser?:string ;
  public logged_in : boolean = false ; 

  login(f:any){
    let data=f.value
    console.log(data) ;
    this.freelancersService.login(data).subscribe(data=>{
      //this.datatoken=data
      //this.produitServiceService.saveToken(this.datatoken.token)
      
      console.log(data) ;
      //this.loggedUser = this.email ;
      this.logged_in = true;
      //localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('logged_in',String(this.logged_in));

      /////////// bsh naamel test kn admin ly connecté yhezu l dashboardAdmin sinon yet7el lcompte taa user aady (bel role [freelancer ,client, admin])
      this.route.navigate(['/dashboard'])

    },(err:HttpErrorResponse)=>this.messageError=err.error.error)
  }

}
