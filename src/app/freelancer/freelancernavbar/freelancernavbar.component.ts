import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-freelancernavbar',
  templateUrl: './freelancernavbar.component.html',
  styleUrls: ['./freelancernavbar.component.css']
})
export class FreelancernavbarComponent implements OnInit {
  searchedKeyword!:string;
  

  messageErr:any;
  freelancerdata:any;
  constructor(private route:Router, private servicesService:UsersService) {
  this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata.firstname)

}
  ngOnInit(): void {
  
  }
  logout(){
  
    this.servicesService.logout();
    this.route.navigate(['/login']);
   
  }
}
