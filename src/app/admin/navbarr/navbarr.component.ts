import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css']
})
export class NavbarrComponent implements OnInit {
  searchedKeyword!:string;
  

  messageErr:any;
  admindata:any;
  freelancerdata: any;
  clientdata: any;
  constructor(private route:Router, private servicesService:UsersService) {
  this.admindata = JSON.parse( localStorage.getItem('admindata') !);
  //  console.log(this.admindata.firstname)
  //  this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
  //  console.log(this.freelancerdata.firstname)
  //  this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
  //  console.log(this.clientdata.firstname)
}
  ngOnInit(): void {
  
  }
  
  logout(){
      this.servicesService.logout();
      localStorage.clear();
      this.route.navigate(['/login']);
   
  }
}
