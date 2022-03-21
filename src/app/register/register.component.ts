import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Freelancer } from 'src/app/model/freelancer.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageError:any
  
  
  registerr:any = "https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png";
  constructor(private freelancersService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  register(f:any){
    let data=f.value
    console.log(data)
    this.freelancersService.register(data).subscribe(data=>{
      this.router.navigate(['/login'])
      
      console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageError="hjbgvehjbhvbsdhbv"})

  }

}
