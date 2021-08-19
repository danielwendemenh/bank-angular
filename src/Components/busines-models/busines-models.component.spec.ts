import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesModelsComponent } from './busines-models.component';

describe('BusinesModelsComponent', () => {
  let component: BusinesModelsComponent;
  let fixture: ComponentFixture<BusinesModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
