import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  image: any;
  upadate!: any;
  messageSuccess: any;
  constructor(private route:Router, private usersService:UsersService) {
    this.admindata = JSON.parse( localStorage.getItem('admindata') !) ;
    console.log(this.admindata)

    this.upadate = new FormGroup({
     // photo: new FormControl('', [Validators.required]),
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

  getdata(email:string , adresse :string, id:any){
    this.messageSuccess=''
    this.admindata.id = id 
    this.admindata.email = email
     this.admindata.adresse = adresse 
    console.log(this.admindata)

  }

  fileChange(event:any) {
    this.image =event.target.files[0];   
  }
  
  updatenewuser (f:any){
    let data=f.value
    const formData = new FormData();
   // formData.append('photo', this.image );
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

    this.usersService.updateProfileUser(this.admindata.id,formData).subscribe(response=>
      {
      console.log(response)
        let indexId=this.admindata.findIndex((obj:any)=>obj.id==this.admindata.id)

        this.admindata[indexId].email=data.email
      //  this.admindata[indexId].photo=data.photo
        this.admindata[indexId].firstname=data.firstname
        this.admindata[indexId].lastname=data.lastname
        this.admindata[indexId].adresse=data.adresse
        this.admindata[indexId].phone=data.phone
        this.admindata[indexId].job=data.job
        this.admindata[indexId].description=data.description
        this.admindata[indexId].birthday=data.birthday
        this.admindata[indexId].earning=data.earning
        this.admindata[indexId].password=data.password
        this.admindata[indexId].password_confirmation=data.password_confirmation

        this.messageSuccess=`this email : ${this.admindata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }

  ngOnInit(): void {

  }

}
