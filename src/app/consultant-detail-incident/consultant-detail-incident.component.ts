import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as sockjs from 'sockjs-client'
import { CompatClient, Stomp } from '@stomp/stompjs';
import { IncidentsService } from '../services/incidents.service';
import { MessageService } from '../services/message.service';

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
  constructor(private formbuilder:FormBuilder ,private incideService:IncidentsService,private route: ActivatedRoute,private messageService:MessageService) { }

  ngOnInit(): void {
         
    const c=sockjs("http://localhost:8000/wsServer")
    this.stompclient=Stomp.over(c)
    this.stompclient.connect({username:localStorage.getItem("username")},()=>{
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
   
    this.formMessage=this.formbuilder.group({
      message:'',
      receiver:'gogo',
      type:'Consultant',
      incident_id:'1',
      person_id:'2'
    })
    let idinc=Number( this.route.snapshot.paramMap.get("id"))

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
  
        this.messageService.postMessage(this.formMessage.value).subscribe({
          next:res=>{
            console.log(res)
          },
          error:err=>{
            console.log(err)
          }
        })
      //console.log(this.formMessage.value)
  }
}
