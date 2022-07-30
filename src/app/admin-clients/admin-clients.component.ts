import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  clients:any
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next:res=>{
        console.log(res)
        this.clients=res;
      },
      error:error=>{
        console.log(error)
      }
    })
  }

}
