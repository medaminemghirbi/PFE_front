import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo:any = "./assets/lg.png";
  logged_in:any;
  constructor( public userservice :UsersService) { }

  ngOnInit(): void {
    this.connecter();
  }
    connecter(){
      if(this.userservice.connecte ==true)
      this.logged_in =true
    }
}
