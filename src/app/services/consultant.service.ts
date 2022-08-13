import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultant } from '../persons.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http:HttpClient) { }

  getconsultants():Observable<Array<Consultant>>
  {
    return  this.http.get<Array<Consultant>>("http://localhost:8000/getConsultant");
  }
 
  deleteConsultant(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:8000/deleteConsultant/"+id);
  }
  postConsultant(data:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:8000/postConsultant",data);
  }
  getincidents(page:number,size:number):Observable<any>
  {
      return this.http.get("http://localhost:8000/getIncidentsByConsultant/"+2+"?page="+page+"&size="+size);
  }
}
