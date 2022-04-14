import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detailfreelancer',
  templateUrl: './detailfreelancer.component.html',
  styleUrls: ['./detailfreelancer.component.css']
})
export class DetailfreelancerComponent implements OnInit {
  messageErr =''
  dataArray:any = [];
  constructor(private activatedRoute: ActivatedRoute,private usersservice :UsersService) { }

  ngOnInit(): void {
    this.usersservice.freelancerhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }

}
