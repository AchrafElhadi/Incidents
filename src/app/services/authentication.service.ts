import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private router:Router) { }

  login(data:any):Observable<any>
  {
    return this.http.post("http://localhost:8000/signin",data);
  }

  isAuthenticated()
  {
    let text=localStorage.getItem("user")
      return text

  }

  isClient()
  {
      let text=this.isAuthenticated()
      let isclient

      if(text)
      {
        let user=JSON.parse(text)
        isclient=user.rolesList.find((x: { roleName: string; })=>x.roleName=="Client") 
      }
       if(!isclient)
        this.router.navigate(['/login'])
  }
  isAdmin()
  {
    let text=this.isAuthenticated()
      let isclient

      if(text)
      {
        let user=JSON.parse(text)
        isclient=user.rolesList.find((x: { roleName: string; })=>x.roleName=="Admin") 
      }
       if(!isclient)
        this.router.navigate(['admin/login'])

  }

  isConsultant()
  {
    let text=this.isAuthenticated()
      let isConsultant

      if(text)
      {
        let user=JSON.parse(text)
        isConsultant=user.rolesList.find((x: { roleName: string; })=>x.roleName=="Consultant") 
      }
       if(!isConsultant)
        this.router.navigate(['/consultant/login'])

  }
}
