import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl,Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerr:any = "https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png";

  public connecte : boolean = false ;

  messageError:any

  registerForm =  new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  user : User ={
    email:'',
    password:'',
  }

  constructor(private freelancersService:UsersService,private route:Router) { }

  ngOnInit(): void {
  }

  login(){

    const data = {
      email:this.user.email,
      password:this.user.password,

    };

    this.freelancersService.login(data).subscribe(
      response => {
        console.log(response);
       if(response.user.email_confirmed==true) {
          if(response.logged_in ==true && response.role =="admin"  ){
            localStorage.setItem( 'admindata', JSON.stringify( response.user ) );
            console.log(response);
            this.route.navigate(['/dashboard']);
          }
          else if(response.logged_in ==true && response.role =="client")
          {
            localStorage.setItem( 'clientdata', JSON.stringify( response.user ) );
            this.route.navigate(['/profil-client']);
          }else if(response.logged_in ==true && response.role =="freelancer")
          {
            localStorage.setItem( 'freelancerdata', JSON.stringify( response.user ) );
            this.route.navigate(['/profil-freelancer']);
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email or Password is Incorrect!'
            })
          }
        } 
        else
        {
     
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'account created but not confirmed !, check Your Email '
          })
        }
       
 
     
      },(err:HttpErrorResponse)=>this.messageError=err.error.error);
  }

  
}
