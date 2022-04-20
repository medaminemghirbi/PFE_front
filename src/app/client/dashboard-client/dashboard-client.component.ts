import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  clientdata:any;
  constructor(private route:Router, private servicesService:UsersService) {
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
      console.log(this.clientdata.firstname)
  
  }

  ngOnInit(): void {
  }

}
