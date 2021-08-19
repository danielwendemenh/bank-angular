import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammModelComponent } from './gramm-model.component';

describe('GrammModelComponent', () => {
  let component: GrammModelComponent;
  let fixture: ComponentFixture<GrammModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
