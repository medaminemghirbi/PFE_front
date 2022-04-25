import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  error:any ;
  //sendemail: any ;

  constructor( ) {

   /* this.sendemail = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
    */
   }

  ngOnInit(): void {
  }
  
  public sendEmail(e: Event) {
    e.preventDefault();
    /* const formData = new FormData();

      formData.append('name', this.sendemail.value.name);
      formData.append('email', this.sendemail.value.email);
      formData.append('message', this.sendemail.value.message);
    */
    emailjs.sendForm('service_ft0i1pf', 'template_v8iv5fs', e.target as HTMLFormElement, 'user_c18mROsP6hhSIlubZqFTI')
      .then((result: EmailJSResponseStatus) => {
       
        console.log(result.text);
        Swal.fire('Email Succefully Sended !', '', 'success')
      }, (error: { text: any; }) => {
        
        console.log(error.text);
        Swal.fire('Email Not Sended !', '', 'error')
      });

    
    }
  

}
