import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usersnavbar',
  templateUrl: './usersnavbar.component.html',
  styleUrls: ['./usersnavbar.component.css']
})
export class UsersnavbarComponent implements OnInit {
  logo:any = "./assets/lg.png";
  logged_in:boolean = false ;
  role: string = '';
  constructor( public userService :UsersService) {
    this.logged_in = JSON.parse( localStorage.getItem('logged_in') !);
    console.log(this.logged_in)

    this.role = JSON.parse( localStorage.getItem('role') !);
    console.log(this.role)

   }

  ngOnInit(): void {
    
  }

}