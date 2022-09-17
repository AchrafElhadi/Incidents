import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ConsultantService } from '../services/consultant.service';

@Component({
  selector: 'app-admin-create-consultant',
  templateUrl: './admin-create-consultant.component.html',
  styleUrls: ['./admin-create-consultant.component.css']
})
export class AdminCreateConsultantComponent implements OnInit {

  
  
  formconsultant!:FormGroup
  constructor(    private authentServ:AuthenticationService
,private navConsultant:Router,private consultantService:ConsultantService,private consultantFormbuilder:FormBuilder) {
    this.formconsultant=this.consultantFormbuilder.group({
      nom:'',
      prenom:'',
      username:'',
      password:''
    })
   }

  ngOnInit(): void {
    this.authentServ.isAdmin()
  } 

  postConsultant()
  {
    this.consultantService.postConsultant(this.formconsultant.value).subscribe(
    {
        next:res=>
        {
          console.log(res)
          this.navConsultant.navigate(['/admin/consultants'])
        }
    }
    )
  }
}
