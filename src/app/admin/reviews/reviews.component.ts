import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  dataArray: any ;
  messageErr: any ;

  constructor(private usersService:UsersService,private route:Router) {   }

  ngOnInit(): void {
    this.usersService.getAllReviews().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this review in our database"} 
      //console.log(this.dataArray)
    }) 

  }

  delete(id:any  , i :number){

    this.usersService.deleteReview(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })
    
  }

}