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
  //dataStudent: any;
  messageSuccess: any;
  constructor(private route:Router, private usersService:UsersService) {
    this.admindata = JSON.parse( localStorage.getItem('admindata') !) ;
    console.log(this.admindata)

  }

  getdata(email:string , adresse :string, id:any){
    this.messageSuccess=''
    this.admindata.id = id 
    this.admindata.email = email
     this.admindata.adresse = adresse 
    console.log(this.admindata)

  }
  
  updatenewuser (f:any){
    let data=f.value
    this.usersService.updateProfileUser(this.admindata.id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.admindata.findIndex((obj:any)=>obj.id==this.admindata.id)

        this.admindata[indexId].email=data.email
        this.admindata[indexId].adresse=data.adresse

        this.messageSuccess=`this email : ${this.admindata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }

  ngOnInit(): void {

  }

}
