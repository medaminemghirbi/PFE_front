import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payfreelancer',
  templateUrl: './payfreelancer.component.html',
  styleUrls: ['./payfreelancer.component.css']
})
export class PayfreelancerComponent implements OnInit {
  clientdata: any;

  constructor( private usersService:UsersService  ,private activatedRoute: ActivatedRoute ){

    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata)
    
    render(
      {
          id: "#myPaypalButtons",
          currency: "USD",
          value: "100.00",
          onApprove: (details) => {           
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'transcation sucess',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      );
  }
  pay(data: any) {
    this.usersService.ppp(this.activatedRoute.snapshot.params['id']).subscribe((url: any) => {
      window.location.replace(url);
      console.log(url);
    });
  }

  ngOnInit(): void {

  }

}


