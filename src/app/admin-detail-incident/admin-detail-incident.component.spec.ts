import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailIncidentComponent } from './admin-detail-incident.component';

describe('AdminDetailIncidentComponent', () => {
  let component: AdminDetailIncidentComponent;
  let fixture: ComponentFixture<AdminDetailIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
