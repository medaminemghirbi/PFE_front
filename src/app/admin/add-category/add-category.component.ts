import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  messageErr="" ;

  submitted : boolean = false ;
  constructor(private usersService : UsersService, private router :Router) { 

  }

  ngOnInit(): void {

  }
  addcategory (f:any){
    let data=f.value
    console.log(data)
    
    this.usersService.addcategory(data).subscribe( ()=>{
        console.log(data)
        this.submitted = true ;
      //this.router.navigate(['/posts'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
       
    }) ;
  }
  
}
