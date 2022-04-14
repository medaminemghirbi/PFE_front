import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usersnavbar',
  templateUrl: './usersnavbar.component.html',
  styleUrls: ['./usersnavbar.component.css']
})
export class UsersnavbarComponent implements OnInit {
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
