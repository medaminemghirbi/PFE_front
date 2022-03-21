import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  searchedKeyword!:string;
  
  constructor(public UsersService:UsersService, public router:Router) { }

  ngOnInit(): void {
  
  }
  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}
