import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payfreelancer',
  templateUrl: './payfreelancer.component.html',
  styleUrls: ['./payfreelancer.component.css']
})
export class PayfreelancerComponent implements OnInit {

  constructor(){
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

  ngOnInit(): void {
  }

}
