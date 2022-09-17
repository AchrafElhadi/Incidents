import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  authenticated:boolean=false
  user:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    let user=localStorage.getItem("user")
    if(user)
    {
      this.authenticated=true
      this.user=JSON.parse(user)
      console.log(this.authenticated)
    }
  }
  
  logout()
  {
    localStorage.removeItem("user")
    window.location.href="/admin/login"
    
  }

}
