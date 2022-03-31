import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil-freelancer',
  templateUrl: './profil-freelancer.component.html',
  styleUrls: ['./profil-freelancer.component.css']
})
export class ProfilFreelancerComponent implements OnInit {

  messageErr:any;
  freelancerdata:any;
  admindata:any;
  upadate!: any;
  image:any;
  messageSuccess: any;

  constructor(private route:Router, private usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata)

    this.upadate = new FormGroup({
      photo: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      // rating: new FormControl('', [Validators.required]),
      earning : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
    });
  }
  
  getdata(email:string , id:any){
    this.messageSuccess=''
    this.freelancerdata.id = id 
    this.freelancerdata.email = email
    console.log(this.freelancerdata)

  }

  fileChange(event:any) {
    this.image =event.target.files[0];   
  }

  updatenewuser (f:any){
    let data=f.value
    const formData = new FormData();
    formData.append('photo', this.image );
    formData.append('firstname', this.upadate.value.firstname);
    formData.append('lastname', this.upadate.value.lastname);
    formData.append('email', this.upadate.value.email);
    formData.append('adresse', this.upadate.value.adresse);
    formData.append('phone', this.upadate.value.phone);
    formData.append('job', this.upadate.value.job);
    formData.append('description', this.upadate.value.description);
    formData.append('birthday', this.upadate.value.birthday);
    formData.append('earning', this.upadate.value.earning);
    formData.append('password', this.upadate.value.password);
    formData.append('password_confirmation', this.upadate.value.password_confirmation);

    this.usersService.updateProfileFreelancer(this.freelancerdata.id,formData).subscribe(response=>
      {
      console.log(response)
        let indexId=this.freelancerdata.findIndex((obj:any)=>obj.id==this.freelancerdata.id)

        this.freelancerdata[indexId].email=data.email
        this.freelancerdata[indexId].firstname=data.firstname
        this.freelancerdata[indexId].lastname=data.lastname
        this.freelancerdata[indexId].adresse=data.adresse
        this.freelancerdata[indexId].phone=data.phone
        this.freelancerdata[indexId].job=data.job
        this.freelancerdata[indexId].description=data.description
        this.freelancerdata[indexId].birthday=data.birthday
        this.freelancerdata[indexId].earning=data.earning
        this.freelancerdata[indexId].password=data.password
        this.freelancerdata[indexId].password_confirmation=data.password_confirmation

        this.messageSuccess=`this email : ${this.freelancerdata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }

  
  ngOnInit(): void {
  }


}
