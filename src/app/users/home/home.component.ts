import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cate1:any = "https://mediablog.cdnpk.net/sites/9/2021/12/An-Introduction-To-Graphic-Design-Part-1.jpg";
  cate2:any = "https://apotac.com/wp-content/uploads/2021/11/Untitled-design-391.png";
  cate3:any = "https://splashdev.at/wp-content/uploads/2021/04/Business.jpg";
  cate4:any = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/stockvault-programmer-at-the-d_1200x768.jpeg?o_WsaMA_vBFaMzBFHW3uo8dk7suQHtdK&size=770:433";
  cate5:any = "./assets/cate5.JPG";
  cate6:any = "./assets/cate6.JPG";
  cate7:any = "./assets/cate7.JPG";
  cate8:any = "./assets/cate8.JPG";
  job:any = "./assets/men.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
