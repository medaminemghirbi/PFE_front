import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {CardModule} from 'primeng/card';
import { UsersService } from 'src/app/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-find-freelancer',
  templateUrl: './find-freelancer.component.html',
  styleUrls: ['./find-freelancer.component.css']
})
export class FindFreelancerComponent implements OnInit {
  search = faSearch;
  freelancers:any;
  dataArray:any = [];
  messageErr ='';
  produits: any;
  constructor(private usersService:UsersService,) { 
    this.produits = usersService.listeProduits();
    this.usersService.getallfreelancers().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    //this.freelancers = user.listefreelancers();
  }

  ngOnInit(): void {
  }

}
