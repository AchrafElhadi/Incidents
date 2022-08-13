import { HttpClient } from '@angular/common/http';
import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IncidentsService } from '../services/incidents.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createincident',
  templateUrl: './createincident.component.html',
  styleUrls: ['./createincident.component.css']
})
export class CreateincidentComponent implements OnInit {

  nameForm!:FormGroup
  obj:string=''
  filee!:any
  file!:File[];
  fileUrl: any;
  url: any;
  data:any;
  constructor(private router:Router,private formBuilder:FormBuilder,private http:HttpClient,private incideService:IncidentsService,private sanitizer: DomSanitizer) { 
    this.nameForm=this.formBuilder.group({
      objet:'',
      description:'',
      telephone:'',
      adresse:'',
      raison:'',
     })
  }
  
  ngOnInit(): void {
    // this.incideService.getFile().subscribe(res=>{
    //   this.data=res
    //   console.log(res)
    // },error=>{
    //   console.log(error)
    // })
    // const blob = new Blob([this.data], { type: 'application/octet-stream' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
   
  }

  getdoc(event:any)
  {
    let filevalues=[]

     
        for(let i=0;i<event.target.files.length;i++)
          filevalues.push( event.target.files[i])
      
        
        this.file=filevalues
    
      
   
  }
  postincident()
  {
    const data=new FormData();
    data.append('objet',this.nameForm.value.objet)
    data.append('description',this.nameForm.value.description)
    data.append('telephone',this.nameForm.value.telephone)
    data.append('adresse',this.nameForm.value.adresse)
    data.append('raison',this.nameForm.value.raison)
   
      for(let i=0;i<this.file.length;i++)
          data.append('document[]',this.file[i])
 
    data.append('client_id',"1")
    
    this.incideService.postIncident(data).subscribe(res=>{
      console.log(res)
      this.router.navigate(['Incidents'])
    },error=>{
      console.log(error)
    });

  }
  getinc()
  {
  
      
  }

}
