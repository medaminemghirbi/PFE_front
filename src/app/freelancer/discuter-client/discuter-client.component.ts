import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-discuter-client',
  templateUrl: './discuter-client.component.html',
  styleUrls: ['./discuter-client.component.css']
})
export class DiscuterClientComponent implements OnInit {

  freelancerdata: any;
  messageErr: any;

  constructor(public usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    
  }
/////////////////////////////
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