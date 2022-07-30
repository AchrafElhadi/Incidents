import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateConsultantComponent } from './admin-create-consultant.component';

describe('AdminCreateConsultantComponent', () => {
  let component: AdminCreateConsultantComponent;
  let fixture: ComponentFixture<AdminCreateConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
