import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FreelancersService } from 'src/app/services/freelancers.service';
import {CardModule} from 'primeng/card';
@Component({
  selector: 'app-find-freelancer',
  templateUrl: './find-freelancer.component.html',
  styleUrls: ['./find-freelancer.component.css']
})
export class FindFreelancerComponent implements OnInit {
  search = faSearch;
  freelancers:any;
  constructor(user:FreelancersService) { 
    this.freelancers = user.listefreelancers();
  }

  ngOnInit(): void {
  }

}
