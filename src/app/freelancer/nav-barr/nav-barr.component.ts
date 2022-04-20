import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-barr',
  templateUrl: './nav-barr.component.html',
  styleUrls: ['./nav-barr.component.css']
})
export class NavBarrComponent implements OnInit {
  freelancerdara:any;
  constructor(private route:Router, private servicesService:UsersService) {
    this.freelancerdara = JSON.parse( localStorage.getItem('freelancerdata') !);
      console.log(this.freelancerdara.firstname)
      console.log(this.freelancerdara.id)
  }
    ngOnInit(): void {
    
    }
    logout(){
      localStorage.clear();
      this.servicesService.logout();
      this.route.navigate(['/login']);
     
    }
  }