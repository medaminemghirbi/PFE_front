import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-freelancer',
  templateUrl: './profil-freelancer.component.html',
  styleUrls: ['./profil-freelancer.component.css']
})
export class ProfilFreelancerComponent implements OnInit {
  messageErr:any;
  freelancerdata:any;
  constructor() { 
   /* this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata)*/
  }

  ngOnInit(): void {
  }

}
