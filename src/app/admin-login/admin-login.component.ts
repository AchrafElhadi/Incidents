import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  formlogin!:FormGroup
  f:any
  st:boolean=false
  num:number=0
  download:boolean=false
  errMessage:boolean=false
   constructor(private formbuilder:FormBuilder,private personserv:AuthenticationService,private router:Router) {
      this.formlogin=this.formbuilder.group({
        username:['',Validators.required],
        password:''
      })
  }

  ngOnInit(): void {
    this.f=this.formlogin.get("username")
    let text=localStorage.getItem("user")
    let user
    if(text)
    {
      user=JSON.parse(text)
      if(user.rolesList.find((x: { roleName: string; })=>x.roleName=="Admin"))
              this.router.navigate(['admin/incidents'])
    }

    // console.log("herho")
    // this.clientserv.getClients().subscribe(
    //   {
    //     next:(res)=>console.log(res),
    //     error:(err)=>console.log(err)
    //   }
    // )
  }

  login()
  {
    this.download=true
       this.personserv.login(this.formlogin.value).subscribe(
        {
          next:(res)=>{
            console.log(res)
            if( res.rolesList.find((x: { roleName: string; })=>x.roleName=="Admin")) 
            {
               localStorage.setItem("user",JSON.stringify(res))
               window.location.href='/admin/incidents'
            }else
            {
              this.download=false
              this.errMessage=true
            }
          },
          error:(err)=>{
            console.log(err)
            this.download=false
            this.errMessage=true
          }
        }
      )
     // this.num++;
   }

}
