import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public connecte : boolean = false ; 
  logged_in : boolean = true ; 
  constructor(private http : HttpClient , public router: Router ) { }


  login(data:any): Observable<any> {
    this.connecte = true;
    return this.http.post(AUTH_API + 'sessions/', data);
  }
    
 getUser(){

  return this.http.get(AUTH_API + 'logged_in/')

}
  register(body:any){
    return this.http.post('http://localhost:3000/registrations/' ,body)
  }


  /*getOnestudent(id:any){
    
    return this.http.get(environment.urlBackend+'logged_in/',id)
  
  }*/
  logout(){
    this.connecte = false;
    localStorage.clear();
    return this.http.delete(environment.urlBackend+'logout/') ;
  }

    /////////////////////// categories 
    getAllcategories(){
      return this.http.get(`${environment.urlBackend}`+'categories/')
    }
    addcategory(profile:any){

      return this.http.post(environment.urlBackend+'categories/',profile) ;
  
    }

    ////////////////// missions 
    addstudent(profile:any){

      return this.http.post(environment.urlBackend+'missions/',profile) ;
  
    }
    
    getAllstudents(){
      return this.http.get(`${environment.urlBackend}`+'missions/')
    }
  
  
    getOnestudent(id:any){
      
      return this.http.get(environment.urlBackend+'missions/'+id)
    }
  
    deletestudent(id:any){
      return this.http.delete(environment.urlBackend+'missions/' +id )
  
    }
  
    updateStudent(id:string,newprofile:any){
  
      return this.http.patch(environment.urlBackend+'missions/'+id,newprofile )
  
    }

}
