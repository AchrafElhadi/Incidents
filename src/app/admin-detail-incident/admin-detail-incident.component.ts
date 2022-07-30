import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from '../services/consultant.service';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-admin-detail-incident',
  templateUrl: './admin-detail-incident.component.html',
  styleUrls: ['./admin-detail-incident.component.css']
})
export class AdminDetailIncidentComponent implements OnInit {

  incident!:any
  consultants:any
  consultform!:FormGroup
  incidentId:number=Number( this.route.snapshot.paramMap.get("id"))
  constructor(private formbuild:FormBuilder ,private routenav:Router,private incideService:IncidentsService,private route: ActivatedRoute,private consultantService:ConsultantService) { }

  ngOnInit(): void {
    this.consultform=this.formbuild.group(
      {
          consult:null
      }
    )

    this.consultantService.getconsultants().subscribe({
          next:(res)=>{
            console.log(res)
            this.consultants=res;

          },
          error:(error)=>{
            console.log(error)
          }
        })

    this.incideService.getDetailIncident(this.incidentId).subscribe(res=>{  
      this.incident=res
      this.consultform.setValue({consult:res.consultant_id});
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
  PostaffectConsult()
  {
    console.log(this.consultform.value)

    const data=new FormData();
    data.append('objet',this.incident.objet)
    data.append('description',this.incident.description)
    data.append('telephone',this.incident.telephone)
    data.append('adresse',this.incident.adresse)
    data.append('raison',this.incident.raison)
    data.append('client_id',this.incident.client_id)
    data.append('gravite',this.incident.gravite)
    data.append('consultant_id',this.consultform.value.consult)
 
    this.incideService.putEditIncident(this.incidentId,data).subscribe(res=>{
      console.log(res)
      this.routenav.navigate(['/admin/incidents'])
    },error=>{
      console.log(error)
    });
  }

}
