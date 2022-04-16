import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {CardModule} from 'primeng/card';
import { UsersService } from 'src/app/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-find-project',
  templateUrl: './find-project.component.html',
  styleUrls: ['./find-project.component.css']
})
export class FindProjectComponent implements OnInit {
  languages: { "id": number, "name": string }[] = []
  selectedDefaultLanguage:any
  languagedata:any = []

  search = faSearch;
  freelancers:any;
  dataArray:any = [];
  dataArrayy:any = [];
  datacate:any = [];
  messageErr ='';
  addrequestt :any ;
  freelancerdata: any;

  constructor(private usersService:UsersService, private route : Router) { 
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    ///****************************************************  missions  ************************************///
    this.usersService.getAllMissions().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
    }) 
///****************************************************  categories  ************************************///
    this.usersService.getAllcategories().subscribe(data=>{
      console.log(data)
      this.datacate=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this category in our database"} 
    })
  }

  ngOnInit(): void {
    ///****************************************************  languages  ************************************///
    this.usersService.getAllLanguages().subscribe(language=>{ 
      //debugger
    language.forEach((l: { [x: string]: any; }) => this.languages.push({ "id": l["id"], "name": l["name"] }));
    this.languagedata=language
    this.languagedata.forEach((element: any) => {
   console.log(element)
    });
    (err:HttpErrorResponse)=>{
    console.log(err)
    this.messageErr="We dont't found this language in our database"}
    }) 
    ///****************************************************  missions  ************************************///
    this.usersService.getAllMissions().subscribe(data=>{
      console.log(data)
      this.dataArrayy =data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
    }) 
  }
///****************************************************  missions  ************************************///
  getallmiss () {
    this.usersService.getAllMissions().subscribe(data=>{
      console.log(data)
      this.dataArray =data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
    }) 
  }
///****************************************************  missionbycategory  ************************************///
  missionbycategory ( category_id : any ) {
    this.usersService.getmissionbycategory(category_id).subscribe(response=>{
      console.log(response)
       this.dataArray = response ;
    })
  }
///****************************************************  missionbylanguages  ************************************///
  missionbylanguages ( language_id : any ) {
    this.usersService.getmissionbylanguage(language_id).subscribe(response=>{
      console.log(response)
       this.dataArray = response ;
    })
  }
///****************************************************  missionbybudget  ************************************///
  missionbybudget( budget : any ) {
    this.usersService.getmissionbybudget(budget).subscribe(response=>{
      console.log(response)
       this.dataArray = response ;
    })
  }

  ///****************************************************  addrequest  ************************************///
  addrequest (id:any , freelancer_id:any){

    const formData = new FormData();
      formData.append('mission_id',id );
      formData.append('freelancer_id',this.freelancerdata.id);
      formData.append('status',status);
   // let data=f.value   
    console.log(formData)
    this.usersService.addRequest(formData).subscribe( ()=>{
      
        //console.log(data)
        console.log(formData)
        //this.submitted = true ;
        Swal.fire('Saved!', '', 'success')
       // window.location.reload();
      this.route.navigate(['/project'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
       
    }) ;
  }

}
