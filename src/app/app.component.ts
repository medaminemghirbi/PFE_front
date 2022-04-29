import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freelancy';
/*
  constructor(private route:Router  ) {}

  ngOnInit(): void {

    const EXPIRE_TIME =10;
    setTimeout (() => {
      localStorage.clear();
     
  }, EXPIRE_TIME); // after an hour it will delete the data

  this.route.navigate(['/']);  
}
*/
}
 

