import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from '../incident';
import { IncidentsService } from '../services/incidents.service';

@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.css']
})
export class EditIncidentComponent implements OnInit {

  nameForm!:FormGroup
  obj:string=''
  filee!:any
  file!:File
  fileUrl: any;
  url: any;
  data:any;
  inc!:Incident
  constructor(private router: Router ,private formBuilder:FormBuilder,private incideService:IncidentsService,private route:ActivatedRoute) { 
    this.nameForm=this.formBuilder.group({
      id:'',
      objet:'',
      description:'',
      telephone:'',
      adresse:'',
      raison:'',
      document:'',
      gravite:'',
      
     })
  }


  ngOnInit(): void {
    this.incideService.getDetailIncident(Number(this.route.snapshot.paramMap.get("id"))).subscribe({
      next:(res)=>{
       res.gravite=(this.incideService.convertNumToVal(res.gravite))
      //  res.adresse="iiiii"
        this.inc=res
       console.log(res)
         this.nameForm.setValue(res);
        // console.log(this.convertNumToVal(res.gravite))
        // this.nameForm.value.gravite="High"
        // this.nameForm.value.adresse="High"
        //   console.log(this.nameForm.value.adresse)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  
  getdoc(event:any)
  {
     this.file= event.target.files[0]
  }
  postincident()
  {
    const grav=this.incideService.indexOfname( this.nameForm.value.gravite)    
    // console.log(this.nameForm.value)
    const data=new FormData();
    data.append('objet',this.nameForm.value.objet)
    data.append('description',this.nameForm.value.description)
    data.append('telephone',this.nameForm.value.telephone)
    data.append('adresse',this.nameForm.value.adresse)
    data.append('raison',this.nameForm.value.raison)
    if(this.file!=null)
    data.append('document',this.file)
 
    data.append('client_id',"1")
    data.append('gravite',grav)
    //data.append('gravite',this.nameForm.value.gravite)
    this.incideService.putEditIncident(Number(this.route.snapshot.paramMap.get("id")),data).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/Incidents'])
    },error=>{
      console.log(error)
    });
    
  }

}
