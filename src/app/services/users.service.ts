import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public connecte : boolean = false ; 
  logged_in : boolean = true ; 
  freelancers:User[];
  constructor(private http : HttpClient , public router: Router ) {
    this.freelancers = [
      {id:1,lastname:"mohamed amine",firstname:"mghirbi",photo:"../assets/users/image1.jpg",earning:500,job:"web dev"},
      {id:1,lastname:"mohamed amine",firstname:"mghirbi",photo:"../assets/users/image2.jpg",earning:500,job:"web dev"},
      {id:1,lastname:"mohamed amine",firstname:"mghirbi",photo:"../assets/users/image3.jpg",earning:500,job:"web dev"},
      {id:1,lastname:"mohamed amine",firstname:"mghirbi",photo:"../assets/users/image4.jpg",earning:500,job:"web dev"}
    ];
   }
   listeProduits():User[] {
    return this.freelancers;
  }

  getallcategories(){
    return this.http.get(`${environment.urlBackend}`+'categories/')
  }

  

  login(data:any): Observable<any> {
    this.connecte = true;
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }
    
  getUser(){
    return this.http.get(environment.urlBackend + 'logged_in/')
  }

  register(data:any){
    return this.http.post(environment.urlBackend + 'registrations/' , data)
  }
  getallfreelancers(){
    return this.http.get(`${environment.urlBackend}`+'freelancers/')
  }

  logout(){
    this.connecte = false;
    localStorage.clear();
    return this.http.delete(environment.urlBackend+'logout/') ;
  }

    /////////////////////// categories 
    getAllcategories(){
      return this.http.get(`${environment.urlBackend}`+'categories/')
    }

    addcategory(data:any){
      return this.http.post(environment.urlBackend+'categories/' , data) ;
    }

    deleteCat(id:any){
      return this.http.delete(environment.urlBackend+'categories/' + id )
    }
  
    updateCat(id:string,newdata:any){
      return this.http.patch(environment.urlBackend+'categories/' + id , newdata )
    }

    /////////////// users 
    getAllusers(){
      return this.http.get(`${environment.urlBackend}`+'admin/')
    }

    getOneuser(id:any){   
      return this.http.get(environment.urlBackend+'admin/' + id)
    }

    deleteuser(id:any){
      return this.http.delete(environment.urlBackend+'admin/' + id )
    }

    updateProfileUser(id:string,newprofile:any){
      return this.http.patch(environment.urlBackend+'admin/' + id , newprofile )
    }

    ////////////////// missions 
    addMission (profile:any) {
      return this.http.post(environment.urlBackend+'missions/',profile) ;
    }
    
    getAllMissions () {
      return this.http.get(`${environment.urlBackend}`+'missions/')
    }
  
    getOneMission (id:any) {    
      return this.http.get(environment.urlBackend+'missions/' + id)
    }
  
    deleteMission (id:any) {
      return this.http.delete(environment.urlBackend+'missions/' + id )
    }
  
    updateMission (id:string,newdata:any) {
      return this.http.patch(environment.urlBackend+'missions/' + id , newdata )
    }

    ////////////////////// reviews 
    addReview (profile:any) {
      return this.http.post(environment.urlBackend+'reviews/',profile) ;
    }
    
    getAllReviews () {
      return this.http.get(`${environment.urlBackend}`+'reviews/')
    }
  
    getOneReview  (id:any) {    
      return this.http.get(environment.urlBackend+'reviews/' + id)
    }
  
    deleteReview  (id:any) {
      return this.http.delete(environment.urlBackend+'reviews/' + id )
    }
  
    updateReview  (id:string,newdata:any) {
      return this.http.patch(environment.urlBackend+'reviews/' + id , newdata )
    }

    


}
