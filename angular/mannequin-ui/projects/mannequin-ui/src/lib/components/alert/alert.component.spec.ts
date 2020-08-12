import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannequinAlertComponent } from './alert.component';

describe('MannequinAlertComponent', () => {
  let component: MannequinAlertComponent;
  let fixture: ComponentFixture<MannequinAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannequinAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannequinAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
