import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

 
  constructor(private http: HttpClient) { }
    makePayment(stripeToken:any,amount:any):Observable<any>{
  debugger
      
    return this.http.post<any>(environment.urlBackend+'charges/',{token: stripeToken,amount: amount})

  }
  
}
