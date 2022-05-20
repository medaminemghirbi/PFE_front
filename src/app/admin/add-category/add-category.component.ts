import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcategorie! :  FormGroup;
  messageErr="" ;
  image:any;
  submitted : boolean = false ;
  constructor(private usersService : UsersService, private router :Router) { 
    this.addcategorie = new FormGroup({
      name: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
    });


  }

  ngOnInit(): void {

  }

  addcategory (f:any){
    const formData = new FormData();
    formData.append('avatar', this.image );
    formData.append('name', this.addcategorie.value.name);
    let data=f.value
    
    console.log(data)
    
    this.usersService.addcategory(formData).subscribe( ()=>{
        console.log(data)
        this.submitted = true ;
      this.router.navigate(['/categories'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
       
    }) ;
  }
  fileChange(event:any) {
    this.image =event.target.files[0];
    
  }
  
}
