import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {
  clicked:boolean=false;
  clickedd:boolean=false;
  dataArray:any = [];
  messageErr =''
  freelancerdata:any;
  id:any;
  constructor(public usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
  //  console.log(this.freelancerdata)
   }

  ngOnInit(): void {
    this.getfreealncerexperiance(this.id);

  }
    click(){
    
      this.clicked =true
    }
    clicker(){
    
      this.clickedd =true
    }
    cancel(){
      this.clicked =false
    }
    canceler(){
      this.clickedd =false
    }

getfreealncerexperiance(id:any){
  this.usersService.getfreelancerexperiance(this.freelancerdata.id).subscribe(data=>{

    console.log(data)
    this.dataArray=data , (err:HttpErrorResponse)=>{
      console.log(err)
    this.messageErr="We dont't found this user in our database"} 
    //console.log(this.dataArray)
  }) 
}
    
  }
