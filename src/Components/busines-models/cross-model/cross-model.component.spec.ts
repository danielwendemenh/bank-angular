import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossModelComponent } from './cross-model.component';

describe('CrossModelComponent', () => {
  let component: CrossModelComponent;
  let fixture: ComponentFixture<CrossModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
