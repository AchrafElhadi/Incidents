import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../persons.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  postClient(data:FormData):Observable<any>
  {
    return this.http.post("http://localhost:8000/postClient",data);
  }
  getClients():Observable<Array<Client>>
  {
    return  this.http.get<Array<Client>>("http://localhost:8000/getClients");
  }
  deleteClient(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:8000/deleteClient/"+id);
  }


}
