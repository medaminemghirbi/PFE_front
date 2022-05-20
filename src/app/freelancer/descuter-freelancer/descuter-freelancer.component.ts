import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
declare var apiRTC: any;
@Component({
  selector: 'app-descuter-freelancer',
  templateUrl: './descuter-freelancer.component.html',
  styleUrls: ['./descuter-freelancer.component.css']
})
export class DescuterFreelancerComponent implements OnInit {

  freelancerdata:any;
  messageErr = '' ;
  dataArray: any;
  dataArrayy : any;
  addmessage: any ;
  conversationFormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required])
  });
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,private usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);

    this.addmessage = new FormGroup({
      text: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
    this.usersService.getmessagebysender(this.freelancerdata.id,this.activatedRoute.snapshot.params['id']).subscribe(datac=>{
      debugger
      console.log(datac)
      this.dataArray = datac , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found any message with that id"} 
      //console.log(this.dataArray)
      
    }) 
    this.usersService.getmessagebyreceiver(this.activatedRoute.snapshot.params['id'],this.freelancerdata.id).subscribe(data=>{
      debugger
      console.log(data)
      this.dataArrayy = data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found any message with that id"} 
      //console.log(this.dataArray)
    }) 
    
  }
  get conversationNameFc(): FormControl {
    return this.conversationFormGroup.get('name') as FormControl;
  }


  sendmessage(f:any){
    const formData = new FormData();
    formData.append('text', this.addmessage.value.text);
    formData.append('sender_id', this.freelancerdata.id);
    formData.append('receiver_id', this.activatedRoute.snapshot.params['id']);

    

  let data=f.value   
  console.log(data)
  this.usersService.sendmessage(formData).subscribe( ()=>{
    window.location.reload();
      console.log(data)


  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
     console.log(err.status)
     
  }) ;

  }
  getOrcreateConversation() {
    var localStream: null = null;

    //==============================
    // 1/ CREATE USER AGENT
    //==============================
    var ua = new apiRTC.UserAgent({
      uri: 'apzkey:myDemoApiKey'
    });

    //==============================
    // 2/ REGISTER
    //==============================
    ua.register().then((session:any) => {

      //==============================
      // 3/ CREATE CONVERSATION
      //==============================
      const conversation = session.getConversation(this.conversationNameFc.value);

      //==========================================================
      // 4/ ADD EVENT LISTENER : WHEN NEW STREAM IS AVAILABLE IN CONVERSATION
      //==========================================================
      conversation.on('streamListChanged', (streamInfo: any) => {
        console.log("streamListChanged :", streamInfo);
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation.subscribeToMedia(streamInfo.streamId)
              .then((stream:any) => {
                console.log('subscribeToMedia success');
              }).catch((err:any) => {
                console.error('subscribeToMedia error', err);
              });
          }
        }
      });
      //=====================================================
      // 4 BIS/ ADD EVENT LISTENER : WHEN STREAM IS ADDED/REMOVED TO/FROM THE CONVERSATION
      //=====================================================
      conversation.on('streamAdded', (stream: any) => {
        stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
      }).on('streamRemoved', (stream: any) => {
        stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId);
      });

      //==============================
      // 5/ CREATE LOCAL STREAM
      //==============================
      ua.createStream({
        constraints: {
          audio: true,
          video: true
        }
      })
        .then((stream: any) => {

          console.log('createStream :', stream);

          // Save local stream
          localStream = stream;
          stream.removeFromDiv('local-container', 'local-media');
          stream.addInDiv('local-container', 'local-media', {}, true);

          //==============================
          // 6/ JOIN CONVERSATION
          //==============================
          conversation.join()
            .then((response: any) => {
              //==============================
              // 7/ PUBLISH LOCAL STREAM
              //==============================
              conversation.publish(localStream);
            }).catch((err:any) => {
              console.error('Conversation join error', err);
            });

        }).catch((err:any) => {
          console.error('create stream error', err);
        });
    });
  }
}
