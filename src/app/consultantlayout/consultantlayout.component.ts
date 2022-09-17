import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultantlayout',
  templateUrl: './consultantlayout.component.html',
  styleUrls: ['./consultantlayout.component.css']
})
export class ConsultantlayoutComponent implements OnInit {

  authenticated:boolean=false
  user:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    let user=localStorage.getItem("user")
    if(user)
    {
      
      user=
      this.user=JSON.parse(user)
      this.authenticated=this.user.rolesList.find((x: { roleName: string; })=>x.roleName=="Consultant")?true:false
      console.log(this.authenticated)
    }
  }
  logout()
  {
    localStorage.removeItem("user")
    window.location.href="/consultant/login"
    
  }
}
