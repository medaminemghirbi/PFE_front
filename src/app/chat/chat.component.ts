import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  freelancerdata: any;
  messageErr: any;

  constructor(public usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    
  }

  ngOnInit(): void {
    this.usersService.chat(this.freelancerdata.id).subscribe( (data)=>{
      console.log(data)
    
      //window.location.reload();

  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
     console.log(err.status)
     
  }) ;
  }

}
