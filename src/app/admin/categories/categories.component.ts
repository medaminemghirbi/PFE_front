
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  dataArray:any = []
  p:number = 1 ;
 
  messageErr =''
  //categories :Category[] = [] ;
  messageSuccess = '' ;
  name: string ="" ;
  searchedKeyword!:string;

  constructor(private usersService:UsersService,private route:Router) { }

  ngOnInit(): void {
    this.usersService.getAllcategories().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this category in our database"} 
      //console.log(this.dataArray)
    }) 
  }

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }
  details(id:any){
    this.route.navigate(['/categories/'+id])
  }

/*
  delete(id:any  , i :number){

    this.servicesService.deletestudent(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })
    
  }
  
    getdata(title:string,description:string,id:any){
      this.messageSuccess=''
      this.dataStudent.name=this.name
      // this.dataStudent.image = this.image
      this.dataStudent.id=id
      console.log(this.dataStudent)
  
    }
    updatenewstudent(f:any){
      let data=f.value
      this.servicesService.updateStudent(this.dataStudent.id,data).subscribe(response=>
        {
        console.log(response)
          let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataStudent.id)
  
          this.dataArray[indexId].title=data.title
          this.dataArray[indexId].description=data.description
  
          this.messageSuccess=`this title : ${this.dataArray[indexId].title} is updated`
  
        },(err:HttpErrorResponse)=>{
          console.log(err.message)
        
        })

}
*/

}