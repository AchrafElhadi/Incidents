import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentsService } from '../services/incidents.service';
import { MessageService } from '../services/message.service';
import * as sockjs from 'sockjs-client'
import { CompatClient, Stomp } from '@stomp/stompjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Incident } from '../incidents.model';

@Component({
  selector: 'app-detail-incident',
  templateUrl: './detail-incident.component.html',
  styleUrls: ['./detail-incident.component.css']
})
export class DetailIncidentComponent implements OnInit {

  incident!:Incident
  messages:any
  stompclient!:CompatClient
  file!:File[];

  formMessage!:FormGroup
  statusform!:FormGroup
  constructor(private authentServ:AuthenticationService,private formbuilder:FormBuilder ,private incideService:IncidentsService,private route: ActivatedRoute,private messageService:MessageService) { }

  ngOnInit(): void {
       
    this.authentServ.isClient()

    const c=sockjs("http://localhost:8000/wsServer")
    this.stompclient=Stomp.over(c)
    let text=localStorage.getItem("user")
    let user
    if(text)
      user=JSON.parse(text)
    
    this.stompclient.connect({username:user.id},()=>{
      this.stompclient.subscribe("/user/queue/hello",(res)=>{
        this.messages=[...this.messages,JSON.parse( res.body)]
       // alert(res.body)
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
   const idinc=Number( this.route.snapshot.paramMap.get("id"))
 
    this.statusform=this.formbuilder.group({
      status:'resolu'
    })
    //     this.stompclient.send("/app/hello", {}, JSON.stringify({message:"welcome",receiver:'gogo',incident_id:'1',person_id:'1'}))
  
    
    this.incideService.getDetailIncident(idinc).subscribe(res=>{
      
      
      this.incident=res
      this.statusform.setValue({status:res.status})
      console.log(res)
    },error=>
    {
      console.log(error)
    })

    this.formMessage=this.formbuilder.group({
      message:'',
      receiver:'',
      type:'Client',
      incident_id:idinc,
      person_id:user.id
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

    if(this.formMessage.value.receiver=='')
    this.formMessage.patchValue({receiver:this.incident.consultant_id})

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
  Poststatus()
  {

    console.log(this.statusform.value)
   this.incideService.putEditStatusIncident( Number(this.route.snapshot.paramMap.get("id")),this.statusform.value).subscribe({
    next:res=>alert("Edited successfully")
   })
  }

  // getdoc(event:any)
  // {
  //   let filevalues=[]

     
  //   for(let i=0;i<event.target.files.length;i++)
  //     filevalues.push( event.target.files[i])
  
    
  //   this.file=filevalues

  
  // }

}
