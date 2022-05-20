import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sideebarr',
  templateUrl: './sideebarr.component.html',
  styleUrls: ['./sideebarr.component.css']
})
export class SideebarrComponent implements OnInit {
  clientdata:any;
  constructor(private UsersService:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.clientdata = JSON.parse(localStorage.getItem('clientdata') ||'{}');
    console.log(this.clientdata.id)
  
  }

  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}