import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentsService } from '../services/incidents.service';
import { MessageService } from '../services/message.service';
import * as sockjs from 'sockjs-client'
import { CompatClient, Stomp } from '@stomp/stompjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-incident',
  templateUrl: './detail-incident.component.html',
  styleUrls: ['./detail-incident.component.css']
})
export class DetailIncidentComponent implements OnInit {

  incident!:any
  messages:any
  stompclient!:CompatClient
  file!:File[];

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
      type:'Client',
      incident_id:'1',
      person_id:'1'
    })
    //     this.stompclient.send("/app/hello", {}, JSON.stringify({message:"welcome",receiver:'gogo',incident_id:'1',person_id:'1'}))
  
    const idinc=Number( this.route.snapshot.paramMap.get("id"))
    this.incideService.getDetailIncident(idinc).subscribe(res=>{
      
      
      this.incident=res
      console.log(res)
    },error=>
    {
      console.log(error)
    })
//0000000000000000000000000000000000000000000000000000000000000000000000000
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
  
    //  const data=new FormData()
    //  data.append("message",this.formMessage.value.message)
    //  data.append("receiver",this.formMessage.value.receiver)
    //  data.append("type",this.formMessage.value.type)
    //  data.append("incident_id",this.formMessage.value.incident_id)
    //  data.append("person_id",this.formMessage.value.person_id)
    //  for(let i=0;i<this.file.length;i++)
    //       data.append('document[]',this.file[i])

    console.log("jjjj"+this.formMessage.value.type)
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

  // getdoc(event:any)
  // {
  //   let filevalues=[]

     
  //   for(let i=0;i<event.target.files.length;i++)
  //     filevalues.push( event.target.files[i])
  
    
  //   this.file=filevalues

  
  // }

}
