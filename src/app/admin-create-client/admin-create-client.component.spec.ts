import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateClientComponent } from './admin-create-client.component';

describe('AdminCreateClientComponent', () => {
  let component: AdminCreateClientComponent;
  let fixture: ComponentFixture<AdminCreateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
