import { Injectable } from '@angular/core';
import { Freelancer } from '../model/freelancer.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FreelancersService {

  constructor(private http : HttpClient) { 
    
    /* this.freelancers = [
      {id:1,lastname:"mohamed",firstname:"amine",email:"test@gmail.com",adresse:"test",birthday:new Date("01/14/2011"),password:"hi",sexe:"male",rating:5,phone:58277084,job:"testeur",inscriptiondate:new Date("01/14/2011"),description:"hi",photo:'hi',role:'freelancer'},
      {id:2,lastname:"mohamed",firstname:"amine",email:"test@gmail.com",adresse:"test",birthday:new Date("01/14/2011"),password:"hi",sexe:"male",rating:5,phone:58277084,job:"testeur",inscriptiondate:new Date("01/14/2011"),description:"hi",photo:'hi',role:'freelancer'},
      {id:3,lastname:"mohamed",firstname:"amine",email:"test@gmail.com",adresse:"test",birthday:new Date("01/14/2011"),password:"hi",sexe:"male",rating:5,phone:58277084,job:"testeur",inscriptiondate:new Date("01/14/2011"),description:"hi",photo:'hi',role:'freelancer'},
      
    ];
    */
  }
  
  login(body:any){
    return this.http.post(environment.urlBackend+'sessions/',body) ;
  }

  register(body:any){
    return this.http.post('http://localhost:3000/registrations/' ,body)
  }


  getOnestudent(id:any){
    
    return this.http.get(environment.urlBackend+'logged_in/',id)
  
  }

}
