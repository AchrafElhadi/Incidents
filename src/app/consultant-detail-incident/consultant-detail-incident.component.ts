import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as sockjs from 'sockjs-client'
import { CompatClient, Stomp } from '@stomp/stompjs';
import { IncidentsService } from '../services/incidents.service';
import { MessageService } from '../services/message.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-consultant-detail-incident',
  templateUrl: './consultant-detail-incident.component.html',
  styleUrls: ['./consultant-detail-incident.component.css']
})
export class ConsultantDetailIncidentComponent implements OnInit {

  incident!:any
  messages:any
  stompclient!:CompatClient

  formMessage!:FormGroup
  constructor(private authentServ:AuthenticationService,private formbuilder:FormBuilder ,private incideService:IncidentsService,private route: ActivatedRoute,private messageService:MessageService) { }

  ngOnInit(): void {
    this.authentServ.isConsultant()

    const c=sockjs("http://localhost:8000/wsServer")
    this.stompclient=Stomp.over(c)
    let text=localStorage.getItem("user")
    let user
    if(text)
      user=JSON.parse(text)
    this.stompclient.connect({username:user.id},()=>{
      this.stompclient.subscribe("/user/queue/hello",(res)=>{
        this.messages=[...this.messages,JSON.parse( res.body)]
        console.log(res.body)
      //  console.log()

     this.formMessage.patchValue({
      message:''
     })
      
     let chatHistory = document.getElementById("messageBody");

     if(chatHistory!=null)
     {
         chatHistory.scrollTop=chatHistory.scrollHeight
     }
      })
    })
       let idinc=Number( this.route.snapshot.paramMap.get("id"))

    this.formMessage=this.formbuilder.group({
      message:'',
      receiver:'',
      type:'Consultant',
      incident_id:idinc,
      person_id:user.id
    })

    this.incideService.getDetailIncident(idinc).subscribe(res=>{
      
      
      this.incident=res
      console.log(res)
    },error=>
    {
      console.log(error)
    })
    
    this.messageService.getMessages(idinc).subscribe({
      next:res=>{
       this.messages=res
        
       
      },
      error:error=>{
        console.log(error)
      }
    })
  }
  convertToname(num:string):string
  {
    return this.incideService.convertNumToVal(num)
  }

  sendmessage()
  {
   
      //  this.stompclient.send("/app/hello", {}, JSON.stringify({message:"welcome",receiver:'gogo',incident_id:'1',person_id:'1'}))
      if(this.formMessage.value.receiver=='')
      this.formMessage.patchValue({receiver:this.incident.client_id})

        this.messageService.postMessage(this.formMessage.value).subscribe({
          next:res=>{
            this.messages=[...this.messages,{message:this.formMessage.value.message}]
            this.formMessage.patchValue({message:''})
            let chatHistory = document.getElementById("messageBody");

            if(chatHistory!=null)
            {
                chatHistory.scrollTop=chatHistory.scrollHeight
            }
          },
          error:err=>{
            console.log(err)
          }
        })
      //console.log(this.formMessage.value)
  }
}
