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
  logged_in : boolean = false ; 
  count: any = [] ;
  
  
  constructor(private http : HttpClient , public router: Router ) {

  }


  login(data:any): Observable<any> {
    this.logged_in = true ;
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
    return this.http.patch(environment.urlBackend+'updateFreelancer/' + id , newprofile )
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
      return this.http.get<any>(`${environment.urlBackend}`+'languages/')
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
    
    deleteclient(id:any){
      return this.http.delete(environment.urlBackend+'deleteclient/' + id )
    }

    updateProfileUser(id:string,newprofile:any){
      return this.http.patch(environment.urlBackend+'admin/' + id , newprofile )
    }

    updateprofilclient (id:string,newprofile:any){
      return this.http.patch(environment.urlBackend+'updateclient/' + id , newprofile )
    }

    updateimageuser (id:string,newprofile:any){
      return this.http.patch(environment.urlBackend+'updateimagefreelancer/' + id , newprofile )
    }
    
    freelancerhomedata(id:any){
      return this.http.get(`${environment.urlBackend}`+'freelancerdata/' + id)
    }
    
    clienthomedata(id:any){
      return this.http.get(`${environment.urlBackend}`+'clientdata/' + id)
    }

    missionhomedata(id:any){
      return this.http.get(`${environment.urlBackend}`+'missiondata/' + id)
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

    getmissionbyfreelancer (freelancer_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getmissionbyfreelancer/' + freelancer_id )
    }

    getmissionbycategory (category_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getmissionbycategory/' + category_id )
    }

    getmissionbylanguage (language_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getmissionbylanguage/' + language_id )
    }
    getfreelancerbylanguage (id:any){
      return this.http.get(`${environment.urlBackend}`+'getfreelancerbylanguage/'+id)
  
    }

    getmissionbybudget (budget : any) {
      return this.http.get(`${environment.urlBackend}`+'getmissionbybudget/' + budget )
    }
    
    freelancersbyrating (budget : any) {
      return this.http.get(`${environment.urlBackend}`+'freelancersbyrating/' + budget )
    }

    getrequestbyfreelancer (freelancer_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getrequestbyfreelancer/' + freelancer_id )
    }
    
    getrequestbyclient (client_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getrequestbyclient/' + client_id )
    }
    /********************** client : status accepted *****************************************/
    getrequestacceptedbyclient (client_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getrequestacceptedbyclient/' + client_id )
    }
    
    getendedmissionbyclient (client_id : any) {
      return this.http.get(`${environment.urlBackend}`+'getendedmissionbyclient/' + client_id )
    }
    
  /********************** freelancer : status accepted *****************************************/
  getrequestacceptedbyfreelancer (freelancer_id : any) {
    return this.http.get(`${environment.urlBackend}`+'getrequestacceptedbyfreelancer/' + freelancer_id )
  }

  getendedmissionbyfreelancer (freelancer_id : any) {
    return this.http.get(`${environment.urlBackend}`+'getendedmissionbyfreelancer/' + freelancer_id )
  }


    /*******    !!!!  lzm nsalah delete lel client o freelancer          *********/
    deleteRequest(id:any) {
      return this.http.delete(environment.urlBackend+'requests/' + id )
    }

      
    updateRequest (id:string,newdata:any) {
      return this.http.patch(environment.urlBackend+'requests/' + id , newdata )
    }
    
    updatecompleted (id:string,newdata:any) {
      return this.http.patch(environment.urlBackend+'updatecompleted/' + id , newdata )
    }

    countproposition (mission_id : any) {
      //this.count  ;   
      return this.http.get(`${environment.urlBackend}`+'countproposition/' + mission_id )
    }


    ratingfreelancer (freelancer_id : any) {
      //this.count  ;   
      return this.http.get(`${environment.urlBackend}`+'ratingfreelancer/' + freelancer_id )
    }
    ratingclient (client_id : any) {
      //this.count  ;   
      return this.http.get(`${environment.urlBackend}`+'ratingclient/' + client_id )
    }



//***********************countall api***********************/
  countall(){
    return this.http.get<any>(`${environment.urlBackend}`+'countall/')
  }

//***********************experience  call api***********************/
  getfreelancerexperiance(id:any){
    return this.http.get(`${environment.urlBackend}`+'getuserexperiance/'+id)
  }

  deleteexperiance  (id:any) {
    return this.http.delete(environment.urlBackend+'experiences/' + id )
  }
  addexperiance(data:any){
    return this.http.post(environment.urlBackend+'experiences/' , data) ;
  }
  updateexperiance(id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'experiences/' + id , newdata )
  }

  updatelanguage (id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'updatelanguage/' + id , newdata )
  }
  getfreelancerlanguage (id:any){
    return this.http.get(`${environment.urlBackend}`+'getfreelancerlanguage/'+id)

  }
  
  destroylanguagefreelancer  (id:any) {
    return this.http.delete(environment.urlBackend+'destroylanguagefreelancer/' + id )
  }
  
  updatefreelancerlanguages (id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'updatefreelancerlanguages/' + id , newdata )
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

//////////////////**************************  requests api ************************************//////////////
    addRequest(data:any){
      return this.http.post(environment.urlBackend+'requests/' , data) ;
    }

    countrequest (id:any) {
      return this.http.get(environment.urlBackend+'countrequest/') ;
    }
/****************** favoris api ***************************/
    addFavoris(data:any){
      return this.http.post(environment.urlBackend+'favoris/' , data) ;
    }

    
    getallfavoris(id:any){
      return this.http.get(`${environment.urlBackend}`+'favoris/'+id)
    }

    deleteFavoris  (id:any) {
      return this.http.delete(environment.urlBackend+'favoris/' + id )
    }

//////////////////**************************  reviews api ************************************//////////////
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

         /*****************reset password +forgot */
         sendresetlink (email:any)  {
          return this.http.post(environment.urlBackend+'password_resets/',email) ;
        }
        resetpassword(token:string,email:any){
          return this.http.put(environment.urlBackend+'password_resets/'+token,email);
        }

        /************************************* Chat *****************************/
        chat  (id:any) {    
          return this.http.get(environment.urlBackend+'getroom/' + id)
        }
}
