import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebarclient',
  templateUrl: './sidebarclient.component.html',
  styleUrls: ['./sidebarclient.component.css']
})
export class SidebarclientComponent implements OnInit {
  clientdata: any;

  constructor(public usersService:UsersService, public router:Router) { }

  ngOnInit(): void {
    this.clientdata = JSON.parse(localStorage.getItem('clientdata') ||'{}');
    console.log(this.clientdata.id)
  }
  logout(){
  
    this.usersService.logout();
    localStorage.clear()
    this.router.navigate(['/login']);
   
  }

}
