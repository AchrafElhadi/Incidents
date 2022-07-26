import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-detail-incident',
  templateUrl: './detail-incident.component.html',
  styleUrls: ['./detail-incident.component.css']
})
export class DetailIncidentComponent implements OnInit {

  incident!:any
  constructor(private incideService:IncidentsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.incideService.getDetailIncident(Number( this.route.snapshot.paramMap.get("id"))).subscribe(res=>{
      
      
      this.incident=res
      console.log(res)
    },error=>
    {
      console.log(error)
    })
    
  }
  convertToname(num:string):string
  {
    return this.incideService.convertNumToVal(num)
  }


}
