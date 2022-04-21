import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-freelancer',
  templateUrl: './detail-freelancer.component.html',
  styleUrls: ['./detail-freelancer.component.css']
})
export class DetailFreelancerComponent implements OnInit {

  messageErr =''
  dataArray:any ;
  dataArrayy:any ;
  dataArrayyy:any ;
  id: any;
  logged_in:boolean = false ;
  role: string = '';

  constructor(private activatedRoute: ActivatedRoute,private usersService :UsersService) { 
    this.logged_in = JSON.parse( localStorage.getItem('logged_in') !);
    console.log(this.logged_in)

    this.role = JSON.parse( localStorage.getItem('role') !);
    console.log(this.role)

  }
  ngOnInit(): void {
    this.usersService.freelancerhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArray = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

    this.usersService.getfreelancereducation(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArrayy = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

    this.usersService.getfreelancerexperiance(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArrayyy =data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

  }

  printPage() {
    window.print();
  }
}