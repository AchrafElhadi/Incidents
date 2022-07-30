import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-admin-incidents',
  templateUrl: './admin-incidents.component.html',
  styleUrls: ['./admin-incidents.component.css']
})
export class AdminIncidentsComponent implements OnInit {

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
}
