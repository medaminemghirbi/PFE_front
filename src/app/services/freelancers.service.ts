import { Injectable } from '@angular/core';
import { Freelancer } from '../model/freelancer.model';

@Injectable({
  providedIn: 'root'
})
export class FreelancersService {
  freelancers : Freelancer[];
  constructor() { 
    this.freelancers = [
      {id:1,lastname:"mohamed",firstname:"amine",email:"test@gmail.com",adresse:"test",birthday:new Date("01/14/2011"),password:"hi",sexe:"male",rating:5,phone:58277084,job:"testeur",inscriptiondate:new Date("01/14/2011"),description:"hi",photo:'hi',role:'freelancer'},
      {id:2,lastname:"mohamed",firstname:"amine",email:"test@gmail.com",adresse:"test",birthday:new Date("01/14/2011"),password:"hi",sexe:"male",rating:5,phone:58277084,job:"testeur",inscriptiondate:new Date("01/14/2011"),description:"hi",photo:'hi',role:'freelancer'},
      {id:3,lastname:"mohamed",firstname:"amine",email:"test@gmail.com",adresse:"test",birthday:new Date("01/14/2011"),password:"hi",sexe:"male",rating:5,phone:58277084,job:"testeur",inscriptiondate:new Date("01/14/2011"),description:"hi",photo:'hi',role:'freelancer'},
      
    ];
  }
  listefreelancers():Freelancer[] {
    return this.freelancers;
  }
}
