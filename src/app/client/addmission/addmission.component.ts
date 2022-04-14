import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {

  dataArray:any = []
  p:number = 1 ;
  messageErr =''
  messageSuccess = '' ;
  name: string ="" ;
  searchedKeyword!:string;
  submitted: boolean = false ; 
  clientdata: any;
  addmissionn: any ;

  constructor(private usersService:UsersService,private route:Router) { 
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata.firstname)  
    
    this.addmissionn = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      beginingDate: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      
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
  }

  addmission (f:any){

    const formData = new FormData();
      formData.append('title', this.addmissionn.value.title);
      formData.append('description', this.addmissionn.value.description);
      formData.append('duration', this.addmissionn.value.duration);
      formData.append('beginingDate',this.addmissionn.value.beginingDate);
      formData.append('budget', this.addmissionn.value.budget);
      formData.append('category_id',this.addmissionn.value.category_id);
      formData.append('client_id',this.clientdata.id);
      

    let data=f.value   
    console.log(data)
    this.usersService.addMission(formData).subscribe( ()=>{
      debugger
        console.log(data)
       // console.log(formData)
        this.submitted = true ;
        Swal.fire('Saved!', '', 'success')
       // window.location.reload();
      this.route.navigate(['/missions-client'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
       
    }) ;
  }

}