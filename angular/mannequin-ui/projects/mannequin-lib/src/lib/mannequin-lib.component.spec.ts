import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannequinLibComponent } from './mannequin-lib.component';

describe('MannequinLibComponent', () => {
  let component: MannequinLibComponent;
  let fixture: ComponentFixture<MannequinLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannequinLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannequinLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
