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
  
  constructor(private http : HttpClient , public router: Router ) {

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

  updateProfileFreelancer (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'upadateFreelancer/' + id , newprofile )
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
    
    ////////////////// languages 
    addLanguage (profile:any) {
      return this.http.post(environment.urlBackend+'languages/',profile) ;
    }
    
    getAllLanguages () {
      return this.http.get(`${environment.urlBackend}`+'languages/')
    }
  
    getOneLanguage (id:any) {    
      return this.http.get(environment.urlBackend+'languages/' + id)
    }
  
    deleteLanguage (id:any) {
      return this.http.delete(environment.urlBackend+'languages/' + id )
    }
  
    updateLanguage (id:string,newdata:any) {
      return this.http.patch(environment.urlBackend+'languages/' + id , newdata )
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

    getclientmission (client_id : any) {
      return this.http.get(`${environment.urlBackend}`+'client/' + client_id )
    }




//***********************countall api***********************/
    countall(){
      return this.http.get(`${environment.urlBackend}`+'countall/')
    }

//***********************experience  call api***********************/
    getfreelancerexperiance(id:any){
      return this.http.get(`${environment.urlBackend}`+'getuserexperiance/'+id)

    }


//***********************education  call api***********************/
    getfreelancereducation(id:any){
      return this.http.get(`${environment.urlBackend}`+'getusereducation/'+id)
    }

    addschool(data:any){
      return this.http.post(environment.urlBackend+'educations/' , data) ;
    }

    deleteeducation  (id:any) {
      return this.http.delete(environment.urlBackend+'educations/' + id )
    }
    
    updateschool(id:string,newdata:any){
      return this.http.patch(environment.urlBackend+'educations/' + id , newdata )
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
