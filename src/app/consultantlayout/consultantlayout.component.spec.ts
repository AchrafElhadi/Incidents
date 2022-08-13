import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantlayoutComponent } from './consultantlayout.component';

describe('ConsultantlayoutComponent', () => {
  let component: ConsultantlayoutComponent;
  let fixture: ComponentFixture<ConsultantlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
