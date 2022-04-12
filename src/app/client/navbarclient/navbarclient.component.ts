import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbarclient',
  templateUrl: './navbarclient.component.html',
  styleUrls: ['./navbarclient.component.css']
})
export class NavbarclientComponent implements OnInit {

  clientdata:any;
  constructor(private route:Router, private servicesService:UsersService) {
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
      console.log(this.clientdata.firstname)
  
  }
    ngOnInit(): void {
    
    }
    logout(){
      localStorage.clear();
      this.servicesService.logout();
      this.route.navigate(['/login']);
     
    }

}
