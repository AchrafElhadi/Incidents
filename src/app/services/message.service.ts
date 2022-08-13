import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  getMessages(idinc:number)
  {
    return this.http.get(environment.host+"/getMessages/"+idinc);
  }
  postMessage(message:any)
  {
    
     return this.http.post(environment.host+"/Postmessage",message);
  }
}
