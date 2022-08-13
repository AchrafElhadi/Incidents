import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantIncidentsComponent } from './consultant-incidents.component';

describe('ConsultantIncidentsComponent', () => {
  let component: ConsultantIncidentsComponent;
  let fixture: ComponentFixture<ConsultantIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantIncidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
