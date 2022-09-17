import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ConsultantService } from '../services/consultant.service';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-consultant-incidents',
  templateUrl: './consultant-incidents.component.html',
  styleUrls: ['./consultant-incidents.component.css']
})
export class ConsultantIncidentsComponent implements OnInit {

  incidents!:any
  constructor(private authentServ:AuthenticationService,private consultservice:ConsultantService,private incidentserv:IncidentsService) { }

  ngOnInit(): void {
    this.authentServ.isConsultant()

    this.getIncBypage(0)
  }
  convertToName(num:string):string
  {
    return this.incidentserv.convertNumToVal(num)
  }

  getIncBypage(pageNum:number)
  {
    let text=localStorage.getItem("user")
    let user
    if(text)
      user=JSON.parse(text)
      
    this.consultservice.getincidents(pageNum,user.id).subscribe(res=>{
      this.incidents=res;
      console.log(res)
    },error=>console.log(error))
  }

}
