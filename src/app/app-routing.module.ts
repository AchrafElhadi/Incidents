import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateincidentComponent } from './createincident/createincident.component';
import { DetailIncidentComponent } from './detail-incident/detail-incident.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { EditIncidentComponent } from './edit-incident/edit-incident.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ClientlayoutComponent } from './clientlayout/clientlayout.component';
import { AdminIncidentsComponent } from './admin-incidents/admin-incidents.component';
import { AdminDetailIncidentComponent } from './admin-detail-incident/admin-detail-incident.component';
import { AdminCreateClientComponent } from './admin-create-client/admin-create-client.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminConsultantsComponent } from './admin-consultants/admin-consultants.component';
import { AdminCreateConsultantComponent } from './admin-create-consultant/admin-create-consultant.component';
import { ConsultantlayoutComponent } from './consultantlayout/consultantlayout.component';
import { ConsultantIncidentsComponent } from './consultant-incidents/consultant-incidents.component';
import { ConsultantDetailIncidentComponent } from './consultant-detail-incident/consultant-detail-incident.component';
const routes: Routes = [

 
  {path:'',component:ClientlayoutComponent,children:[

    {path:'',component:HomeComponent},
    {path:'createIncident',component:CreateincidentComponent},
    {path:'DetailIncident/:id',component:DetailIncidentComponent},
    {path:'EditIncident/:id',component:EditIncidentComponent},
    {path:'Incidents',component:IncidentsComponent},

  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'createadmin',component:CreateincidentComponent},
    {path:'createadmin',component:CreateincidentComponent},
    {path:'incidents',component:AdminIncidentsComponent},
    {path:'DetailIncident/:id',component:AdminDetailIncidentComponent},
    {path:'CreateClient',component:AdminCreateClientComponent},
    {path:'clients',component:AdminClientsComponent},
    {path:'consultants',component:AdminConsultantsComponent},
    {path:'consultants',component:AdminConsultantsComponent},
    {path:'CreateConsultant',component:AdminCreateConsultantComponent}



  ]},

  {path:'consultant',component:ConsultantlayoutComponent,children:[
    {path:'incidents',component:ConsultantIncidentsComponent},
    {path:'DetailIncident/:id',component:ConsultantDetailIncidentComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
