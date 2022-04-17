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
  logo:any = "./assets/mission.png";
  //search = faSearch;
  freelancers:any;
  dataArraye:any = [];
  dataArray:any = [];
  datacate:any = [];
  languagedata:any = []
  datalanguage:any = [];
  messageErr ='';
  produits: any;
  freelancerdata: any;
  constructor(private usersService:UsersService , private route : Router ) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
   }
  ngOnInit(): void {
    this.usersService.getAllMissions().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.getAllcategories().subscribe(data=>{

      console.log(data)
      this.datacate=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.getAllLanguages().subscribe(language=>{ 
      
      language.forEach((l: { [x: string]: any; }) => this.languages.push({ "id": l["id"], "name": l["name"] }));
    this.languagedata=language
    this.languagedata.forEach((element: any) => {
   console.log(element)
    });
    (err:HttpErrorResponse)=>{
    console.log(err)
    this.messageErr="We dont't found this langugae in our database"}
    }) 
    this.getallmiss()
  }
  getallmiss () {
    this.usersService.getAllMissions().subscribe(data=>{
      console.log(data)
      this.dataArray =data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }
  missionbycategory ( category_id : any ) {
    this.usersService.getmissionbycategory(category_id).subscribe(response=>{
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
