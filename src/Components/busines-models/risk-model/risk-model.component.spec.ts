import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskModelComponent } from './risk-model.component';

describe('RiskModelComponent', () => {
  let component: RiskModelComponent;
  let fixture: ComponentFixture<RiskModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
