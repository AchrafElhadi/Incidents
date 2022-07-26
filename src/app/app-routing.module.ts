import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateincidentComponent } from './createincident/createincident.component';
import { DetailIncidentComponent } from './detail-incident/detail-incident.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { EditIncidentComponent } from './edit-incident/edit-incident.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ClientlayoutComponent } from './clientlayout/clientlayout.component';
const routes: Routes = [

 
  {path:'',component:ClientlayoutComponent,children:[

    {path:'',component:HomeComponent},
    {path:'createIncident',component:CreateincidentComponent},
    {path:'DetailIncident/:id',component:DetailIncidentComponent},
    {path:'EditIncident/:id',component:EditIncidentComponent},
    {path:'Incidents',component:IncidentsComponent},

  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'createadmin',component:CreateincidentComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
