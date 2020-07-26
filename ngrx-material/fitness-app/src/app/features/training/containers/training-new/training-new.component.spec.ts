import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingNewPageComponent } from './training-new.component';

describe('TrainingNewPageComponent', () => {
  let component: TrainingNewPageComponent;
  let fixture: ComponentFixture<TrainingNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingNewPageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
