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
 // logged_in:boolean = false ;

  constructor(private route:Router, private servicesService:UsersService) {
  this.admindata = JSON.parse( localStorage.getItem('admindata') !);

  //this.logged_in = JSON.parse( localStorage.getItem('logged_in') !);
    //console.log(this.logged_in)
}
  ngOnInit(): void {  }
  
  logout(){
      this.servicesService.logout();
      // this.logged_in = false ;
      localStorage.clear();
      this.route.navigate(['/login']);
  }

}
