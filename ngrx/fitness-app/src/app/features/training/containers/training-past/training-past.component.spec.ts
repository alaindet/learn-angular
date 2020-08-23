import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPastPageComponent } from './training-past.component';

describe('TrainingPastPageComponent', () => {
  let component: TrainingPastPageComponent;
  let fixture: ComponentFixture<TrainingPastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingPastPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
