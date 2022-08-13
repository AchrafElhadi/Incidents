import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../services/consultant.service';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-consultant-incidents',
  templateUrl: './consultant-incidents.component.html',
  styleUrls: ['./consultant-incidents.component.css']
})
export class ConsultantIncidentsComponent implements OnInit {

  incidents!:any
  constructor(private consultservice:ConsultantService,private incidentserv:IncidentsService) { }

  ngOnInit(): void {
    this.getIncBypage(0)
  }
  convertToName(num:string):string
  {
    return this.incidentserv.convertNumToVal(num)
  }

  getIncBypage(pageNum:number)
  {
    this.consultservice.getincidents(pageNum,5).subscribe(res=>{
      this.incidents=res;
      console.log(res)
    },error=>console.log(error))
  }

}
