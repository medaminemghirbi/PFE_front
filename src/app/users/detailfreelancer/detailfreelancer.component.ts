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
  logged_in:boolean = false ;
  role: string = '';
  constructor(private activatedRoute: ActivatedRoute,private usersservice :UsersService) { 
    this.logged_in = JSON.parse( localStorage.getItem('logged_in') !);
    console.log(this.logged_in)

    this.role = JSON.parse( localStorage.getItem('role') !);
    console.log(this.role)

  }

  ngOnInit(): void {
    this.usersservice.freelancerhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }
  printPage() {
    window.print();
  }

}
