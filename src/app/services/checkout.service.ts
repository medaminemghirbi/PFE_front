import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  constructor(private http: HttpClient) { }
    makePayment(stripeToken:any,amount:any):Observable<any>{
  //debugger
      
    return this.http.post<any>(environment.urlBackend+'charges/',{token: stripeToken,amount: amount})

  }
  paywithkonnect(data:any){

    let headers = new HttpHeaders({
      'x-api-key':'62878e13e09cf74322391370:pjPYnertQSbCqKUqVGNCqpqnV1QSRiuU'
     });
  let options = { headers: headers };

    
    return this.http.post<any>("https://api.preprod.konnect.network/api/v2/payments/init-payment",data,options)

  }
}