import { Component, OnInit } from '@angular/core';
import { Incident } from '../incident';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incidents!:any
  constructor(private incidentService:IncidentsService) { }

  ngOnInit(): void {
   this.getIncBypage(0)
  }

  convertToName(num:string):string
  {
    return this.incidentService.convertNumToVal(num)
  }

  getIncBypage(pageNum:Number)
  {
    this.incidentService.getIncidents(pageNum).subscribe(res=>{
      this.incidents=res;
      console.log(res)
    },error=>console.log(error))
  }
  supp(id:number)
  {
    // console.log("ho")
    // this.incidentService.supp(id).subscribe({
    //   next:(res)=>{
    //    this.incidents= this.incidents.filter(v=>v.id!=id)
    //   },
    //   error:(error)=>{
        
    //   }
    // })
  }
}
