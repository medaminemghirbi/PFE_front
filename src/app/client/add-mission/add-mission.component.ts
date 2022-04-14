import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {
  dataArray:any = []
  p:number = 1 ;
  messageErr =''
  messageSuccess = '' ;
  name: string ="" ;
  searchedKeyword!:string;
  submitted: boolean = false ; 
  clientdata: any;
  addmissionn: any ;
  dataArrayy: any = [];

  constructor(private usersService:UsersService,private route:Router) { 
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata.firstname)  
    
    this.addmissionn = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      beginingDate: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      idd: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      
    });

  }

  ngOnInit(): void {
    this.usersService.getAllcategories().subscribe(data=>{
      // debugger
      console.log(data)
      
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this category in our database"} 
      //console.log(this.dataArray)
    }) 

    this.usersService.getAllLanguages().subscribe(data=>{
      // debugger
      console.log(data)
      
      this.dataArrayy=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this category in our database"} 
      //console.log(this.dataArray)
    }) 
  }

  addmission (f:any){

    const formData = new FormData();
      formData.append('title', this.addmissionn.value.title);
      formData.append('description', this.addmissionn.value.description);
      formData.append('duration', this.addmissionn.value.duration);
      formData.append('beginingDate',this.addmissionn.value.beginingDate);
      formData.append('budget', this.addmissionn.value.budget);
      formData.append('id',this.addmissionn.value.idd);
      formData.append('id',this.addmissionn.value.id);
      formData.append('client_id',this.clientdata.id);

    let data=f.value   
    console.log(data)
    this.usersService.addMission(formData).subscribe( ()=>{
        console.log(data)
        console.log(formData)
        this.submitted = true ;
      //this.router.navigate(['/missions-client'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
       
    }) ;
  }

}
