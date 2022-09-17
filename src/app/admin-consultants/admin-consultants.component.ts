import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consultant } from '../persons.model';
import { AuthenticationService } from '../services/authentication.service';
import { ConsultantService } from '../services/consultant.service';

@Component({
  selector: 'app-admin-consultants',
  templateUrl: './admin-consultants.component.html',
  styleUrls: ['./admin-consultants.component.css']
})
export class AdminConsultantsComponent implements OnInit {

  consultants!:Array<Consultant>
   constructor(    private authentServ:AuthenticationService
,private navconsult:Router,private consultantService:ConsultantService) {
   }

  ngOnInit(): void {
    this.authentServ.isAdmin()
   this.consultantService.getconsultants().subscribe({
    next:(res)=>
    {
      this.consultants=res;
      console.log(res)
    },
    error:(error)=>{
      console.log(error)
    }
   })
   
  }
  delteConsultant(id:number)
  {
    this.consultantService.deleteConsultant(id).subscribe({
      next:(res)=>{
        this.consultants=this.consultants.filter(v=>v.id!=id)
        
      },
      error:(error)=>{
        console.log("eeeeeeeeeeeeeeeror"+error.status)
      }
    })
  }

}
