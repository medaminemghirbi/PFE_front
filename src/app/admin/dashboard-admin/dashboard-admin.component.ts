import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  dataArray:any = [];
  searchedKeyword!:string;
  messageErr="" ;
  constructor(public UsersService:UsersService, public router:Router) { }

 
  ngOnInit(): void {
    this.UsersService.countall().subscribe(data=>{

      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }
  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}
