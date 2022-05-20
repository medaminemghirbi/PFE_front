import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public UsersService:UsersService, public router:Router) { 

  }

  ngOnInit(): void {
  
  }
  logout(){
    this.UsersService.logout();
    this.router.navigate(['/login']);
    localStorage.clear()

   
  }
}