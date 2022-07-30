import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  postClient(data:FormData):Observable<any>
  {
    return this.http.post("http://localhost:8000/postClient",data);
  }
  getClients():Observable<any>
  {
    return  this.http.get<any>("http://localhost:8000/getClients");
  }

}
