import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {
  clientdata:any;
  constructor() { 
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata)
  }
  ngOnInit(): void {
  }
}
