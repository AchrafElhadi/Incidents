import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultantsComponent } from './admin-consultants.component';

describe('AdminConsultantsComponent', () => {
  let component: AdminConsultantsComponent;
  let fixture: ComponentFixture<AdminConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsultantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
