import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPageComponent } from './training.component';

describe('TrainingPageComponent', () => {
  let component: TrainingPageComponent;
  let fixture: ComponentFixture<TrainingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
