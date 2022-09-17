import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Incident, Incidentpagination } from '../incidents.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(private http:HttpClient) {

   }
   postIncident(data:FormData):Observable<Response>
   {
    return this.http.post<any>("http://localhost:8000/createIncidents",data);
   }
   getIncidents(page:Number,userid:number):Observable<Incidentpagination>
   {
    return this.http.get<Incidentpagination>("http://localhost:8000/getIncidents/"+userid+"?page="+page+"&size="+5);
   }

   getDetailIncident(id:number):Observable<Incident>
   {
    return this.http.get<Incident>("http://localhost:8000/getIncident/"+id);
   }
   putEditIncident(id:number,data:any):Observable<Incident>
   {
    return this.http.put<Incident>("http://localhost:8000/getIncident/"+id,data);
   }
   putEditStatusIncident(id:number,data:any):Observable<Incident>
   {
    return this.http.put<Incident>("http://localhost:8000/getIncidentstatus/"+id,data);
   }
   
   getFile():Observable<Response>
   {
    return this.http.get<any>("http://localhost:8000/image/linux.txt");
   }
   supp(id:number):Observable<Response>
   {
    return this.http.delete<any>("http://localhost:8000/incident/"+id);
   }
   convertNumToVal(num:string):string
   {
      const tab= ["Low","Medium","High"]
      return tab[Number(num)]
   }
   indexOfname(name:string):string
   {
      const tab= ["Low","Medium","High"]
      return tab.indexOf(name).toString()
   }
   getAllIncidents(page:number):Observable<Array<Incident>>
   {
      return this.http.get<Array<Incident>>("http://localhost:8000/getIncidents"+"?page="+page+"&size="+5);
   }
}
