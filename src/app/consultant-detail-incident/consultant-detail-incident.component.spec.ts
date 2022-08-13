import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantDetailIncidentComponent } from './consultant-detail-incident.component';

describe('ConsultantDetailIncidentComponent', () => {
  let component: ConsultantDetailIncidentComponent;
  let fixture: ComponentFixture<ConsultantDetailIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantDetailIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantDetailIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
