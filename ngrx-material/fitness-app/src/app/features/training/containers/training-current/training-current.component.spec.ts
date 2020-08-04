import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCurrentPageComponent } from './training-current.component';

describe('TrainingCurrentPageComponent', () => {
  let component: TrainingCurrentPageComponent;
  let fixture: ComponentFixture<TrainingCurrentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingCurrentPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCurrentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
