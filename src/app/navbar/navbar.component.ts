import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isclient:boolean=false
  user:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    let text=localStorage.getItem("user")
    let user
    if(text!=null)
    {
      console.log(text)
      user=JSON.parse(text)
      console.log(user)

      this.isclient= user.rolesList.find((x: { roleName: string; })=>x.roleName=="Client")?true:false
      this.user=user
    }
  }
  logout()
  {
    localStorage.removeItem("user")
    window.location.href="/"


  }

}
