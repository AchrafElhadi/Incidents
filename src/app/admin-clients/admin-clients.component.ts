import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../persons.model';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  clients!:Array<Client>
  constructor(    private authentServ:AuthenticationService
,private clientService:ClientService) { }

  ngOnInit(): void {
    this.authentServ.isAdmin()
    this.clientService.getClients().subscribe({
      next:res=>{
        this.clients=res;
      },
      error:error=>{
        console.log(error)
      }
    })
  }
  deleteClient(id:number)
  {
    this.clientService.deleteClient(id).subscribe({
      next:res=>this.clients=this.clients.filter(v=>v.id!=id),
      error:err=>console.log(err)
    })
  }

}
