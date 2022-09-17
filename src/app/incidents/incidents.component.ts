import { Component, OnInit } from '@angular/core';


import { Incident } from '../incidents.model';
import { Incidentpagination } from '../incidents.model';
import { AuthenticationService } from '../services/authentication.service';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incidents!:Incidentpagination
  constructor(private authentServ:AuthenticationService,private incidentService:IncidentsService) { }


  ngOnInit(): void {
    this.authentServ.isClient()
   this.getIncBypage(0)
  

  }

  convertToName(num:string):string
  {
    return this.incidentService.convertNumToVal(num)
  }

  getIncBypage(pageNum:Number)
  {
    let text=localStorage.getItem("user")
    let user
    if(text)
      user=JSON.parse(text)
 
    this.incidentService.getIncidents(pageNum,user.id).subscribe(res=>{
      this.incidents=res;
      console.log(res)
    },error=>console.log(error))
  }
  supp(id:number)
  {
    // console.log("ho")
    this.incidentService.supp(id).subscribe({
      next:(res)=>{
       this.incidents.listincidentFront= this.incidents.listincidentFront.filter(v=>v.id!=id)
      },
      error:(error)=>{
        
      }
    })


  }
}
