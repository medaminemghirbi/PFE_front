import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-active-missions-freelancer',
  templateUrl: './active-missions-freelancer.component.html',
  styleUrls: ['./active-missions-freelancer.component.css']
})
export class ActiveMissionsFreelancerComponent implements OnInit {

  p:number = 1 ;
  dataMission = {
    id : '' ,
    status  : '',
    mission_id:'',
    freelancer_id:'' ,
    completed  : false ,
  }
  messageErr =''
  
  messageSuccess = '' ;
  title: string ="" ;
  searchedKeyword!:string;
  dataArray: any;
  freelancerdata: any;
  submitted: boolean = false ;
  dataArrayy:any ;
  dataArrayyy:any ;
  update: FormGroup;

  constructor(private usersService:UsersService,private route:Router ,private activatedRoute: ActivatedRoute, ) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata)

    this.update = new FormGroup({
      completed: new FormControl(''),
    });
    
  }
  

  ngOnInit(): void {
    this.usersService.getrequestacceptedbyfreelancer(this.freelancerdata.id).subscribe(data=>{
      console.log(data)
      this.dataArray = data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.freelancerhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArrayy = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 


  }

  
    getdata(status:string,mission_id:string,freelancer_id:any , id:any , completed :boolean ){
      this.messageSuccess=''
      this.dataMission.id=id
      this.dataMission.completed=completed
      this.dataMission.status=status
      this.dataMission.mission_id=mission_id
      this.dataMission.freelancer_id=freelancer_id
      console.log(this.dataMission)
  
    }
    updatemissioncompleted (f:any){

      let data=f.value
    const formData = new FormData();
    formData.append('completed', this.update.value.completed );

    Swal.fire('Whooa!', 'Mission Succeffulfy updated !', 'success')
    this.usersService.updatecompleted(this.dataMission.id,formData).subscribe(response=>
      {
      console.log(response)
      this.submitted = true ;
        let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataMission.id)

        //this.dataArray[indexId].id=data.id
        this.dataArray[indexId].completed=data.completed
        
        this.messageSuccess=`this completed : ${this.dataArray[indexId].completed} is updated`
        window.location.reload();
       this.route.navigate(['/postulated-missions-freelancer']);
      
      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })

      
      
    }


}
