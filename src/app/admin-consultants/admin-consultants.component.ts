import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultantService } from '../services/consultant.service';

@Component({
  selector: 'app-admin-consultants',
  templateUrl: './admin-consultants.component.html',
  styleUrls: ['./admin-consultants.component.css']
})
export class AdminConsultantsComponent implements OnInit {

  consultants!:any
   constructor(private navconsult:Router,private consultantService:ConsultantService) {
   }

  ngOnInit(): void {

   this.consultantService.getconsultants().subscribe({
    next:(res)=>
    {
      this.consultants=res;
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
        console.log(res)
        
      },
      error:(error)=>{
        console.log("eeeeeeeeeeeeeeeror"+error.status)
      }
    })
  }

}
