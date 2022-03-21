import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {CardModule} from 'primeng/card';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-find-freelancer',
  templateUrl: './find-freelancer.component.html',
  styleUrls: ['./find-freelancer.component.css']
})
export class FindFreelancerComponent implements OnInit {
  search = faSearch;
  freelancers:any;
  constructor(user:UsersService) { 
    //this.freelancers = user.listefreelancers();
  }

  ngOnInit(): void {
  }

}
