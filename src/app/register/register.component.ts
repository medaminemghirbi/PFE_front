import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Freelancer } from 'src/app/model/freelancer.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FreelancersService } from 'src/app/services/freelancers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageError:any
  constructor(private freelancersService:FreelancersService,private router:Router) { }

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
