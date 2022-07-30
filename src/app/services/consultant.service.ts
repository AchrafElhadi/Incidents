import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http:HttpClient) { }

  getconsultants():Observable<any>
  {
    return  this.http.get<any>("http://localhost:8000/getConsultant");
  }
 
  deleteConsultant(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:8000/deleteConsultant/"+id);
  }
  postConsultant(data:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:8000/postConsultant",data);
  }
}
