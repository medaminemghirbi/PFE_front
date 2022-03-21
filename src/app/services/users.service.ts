import { Injectable } from '@angular/core';
import { Freelancer } from '../model/freelancer.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public connecte : boolean = false ; 
  constructor(private http : HttpClient , private router: Router ) { }

  login(body:any){
    this.connecte = true;
    return this.http.post(environment.urlBackend+'sessions/',body) ;
    
  }

  register(body:any){
    return this.http.post('http://localhost:3000/registrations/' ,body)
  }


  getOnestudent(id:any){
    
    return this.http.get(environment.urlBackend+'logged_in/',id)
  
  }
  logout(){
    this.connecte = false;
    // localStorage.removeItem('token')
    return this.http.delete(environment.urlBackend+'logout/') ;
  }
}
