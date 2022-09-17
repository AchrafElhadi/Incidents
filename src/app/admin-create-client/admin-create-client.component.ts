import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-admin-create-client',
  templateUrl: './admin-create-client.component.html',
  styleUrls: ['./admin-create-client.component.css']
})
export class AdminCreateClientComponent implements OnInit {

  formclient!:FormGroup

  constructor(    private authentServ:AuthenticationService
,private formbuilder:FormBuilder,private navRoute:Router,private clientservice:ClientService) { 
    this.formclient=this.formbuilder.group(
      {
        nom:'',
        prenom:'',
        numero:'',
        username:'',
        password:''
      }
    )
  }

  ngOnInit(): void {
    this.authentServ.isAdmin()
  }

  postClient()
  {
      this.clientservice.postClient(this.formclient.value).subscribe({
        next:(res)=>
        {
          console.log(res);
          this.navRoute.navigate(['/admin/clients'])
        },
        error:(error)=>{
          console.log(error)
        }
      })
  }

}
