import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataArray:any = [];
  messageErr =''
  cate1:any = "https://mediablog.cdnpk.net/sites/9/2021/12/An-Introduction-To-Graphic-Design-Part-1.jpg";
  cate2:any = "https://apotac.com/wp-content/uploads/2021/11/Untitled-design-391.png";
  cate3:any = "https://splashdev.at/wp-content/uploads/2021/04/Business.jpg";
  cate4:any = "./assets/search.png";
  cate5:any = "./assets/signup.png";
  cate6:any = "./assets/cate6.JPG";
  cate7:any = "./assets/cate7.JPG";
  cate8:any = "./assets/cate8.JPG";
  job:any = "./assets/men.jpg";
  cate9:any = "./assets/apply.png";

  logged_in:any;
  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllcategories().subscribe(data=>{
      this.connecter();
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }
  connecter(){
    if(this.usersService.connecte ==true)
    this.logged_in =true
  }
}