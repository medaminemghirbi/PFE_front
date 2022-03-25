import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  messageErr:any;
  admindata:any;
  constructor(private route:Router, private servicesService:UsersService) {
this.admindata = JSON.parse( localStorage.getItem('admindata') !);
    console.log(this.admindata)

}

  ngOnInit(): void {

  }

}
