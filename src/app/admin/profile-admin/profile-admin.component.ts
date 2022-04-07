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

  getdata(email:string ,description:any, adresse :string, id:any){
    this.messageSuccess=''
    this.admindata.id = id 
    this.admindata.email = email
     this.admindata.adresse = adresse 
     this.admindata.description   =description
    console.log(this.admindata)

  }
  
  updatenewuser (f:any){
    let data=f.value
    this.usersService.updateProfileUser(this.admindata.id,data).subscribe(response=>
      {
        localStorage.clear();
        localStorage.setItem( 'admindata', JSON.stringify( response ) );
    
      console.log(response)
        let indexId=this.admindata.findIndex((obj:any)=>obj.id==this.admindata.id)

        this.admindata[indexId].email=data.email
        this.admindata[indexId].adresse=data.adresse
        this.admindata[indexId].description=data.description
        this.admindata[indexId].firstname=data.firstname

        this.admindata[indexId].lastname=data.lastname

        this.messageSuccess=`this email : ${this.admindata[indexId].email} is updated`
     
      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
      window.location.reload();

  }

  ngOnInit(): void {

  }

}
