import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cate1:any = "./assets/logo/Pen-Tool.svg";
  cate2:any = "./assets/logo/Target.svg";
  cate3:any = "./assets/logo/Charts-2.svg";
  cate4:any = "./assets/logo/Code.svg";
  cate5:any = "./assets/cate5.JPG";
  cate6:any = "./assets/cate6.JPG";
  cate7:any = "./assets/cate7.JPG";
  cate8:any = "./assets/cate8.JPG";
  job:any = "./assets/men.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
