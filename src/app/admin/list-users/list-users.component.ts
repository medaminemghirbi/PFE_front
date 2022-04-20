import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  dataArray:any = []
  p:number = 1 ;
  dataStudent={
    id : '',
    email:'',
    role:'' ,
  
  }
  messageErr =''
  searchedKeyword!:string;
  messageSuccess = '' ;
  role: string ="" ;

  constructor(private usersService:UsersService,private route:Router) {
    
  }
  ngOnInit(): void {
    this.usersService.getAllusers().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
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
    this.route.navigate(['/users/'+id])
  }


  delete(id:any  , i :number){
    this.usersService.deleteuser(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })
    
  }
  
    getdata(email:string, id:any){
      this.messageSuccess=''
      this.dataStudent.id = id 
      this.dataStudent.email = email
      // this.dataStudent.role = role 
      console.log(this.dataStudent)
  
    }
    updatenewuser (f:any){
      let data=f.value
      this.usersService.updateProfileUser(this.dataStudent.id,data).subscribe(response=>
        {
        console.log(response)
          let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataStudent.id)
  
          this.dataArray[indexId].title=data.title
          this.dataArray[indexId].description=data.description
  
          this.messageSuccess=`this name : ${this.dataArray[indexId].title} is updated`
  
        },(err:HttpErrorResponse)=>{
          console.log(err.message)
        
        })
    }
  
 

}
