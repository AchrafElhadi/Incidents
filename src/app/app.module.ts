import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CreateincidentComponent } from './createincident/createincident.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import {HttpClientModule } from '@angular/common/http';
import { IncidentsComponent } from './incidents/incidents.component';
import { DetailIncidentComponent } from './detail-incident/detail-incident.component';
import { EditIncidentComponent } from './edit-incident/edit-incident.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ClientlayoutComponent } from './clientlayout/clientlayout.component';
import { AdminIncidentsComponent } from './admin-incidents/admin-incidents.component';
import { AdminDetailIncidentComponent } from './admin-detail-incident/admin-detail-incident.component';
import { AdminCreateClientComponent } from './admin-create-client/admin-create-client.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminConsultantsComponent } from './admin-consultants/admin-consultants.component';
import { AdminCreateConsultantComponent } from './admin-create-consultant/admin-create-consultant.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CreateincidentComponent,
    IncidentsComponent,
    DetailIncidentComponent,
    EditIncidentComponent,
    AdminLayoutComponent,
    ClientlayoutComponent,
    AdminIncidentsComponent,
    AdminDetailIncidentComponent,
    AdminCreateClientComponent,
    AdminClientsComponent,
    AdminConsultantsComponent,
    AdminCreateConsultantComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
