import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
    
  }
  logout(){
  
   // localStorage.clear();
    this.usersService.logout();
    this.router.navigate(['/login']);
   
  }
}