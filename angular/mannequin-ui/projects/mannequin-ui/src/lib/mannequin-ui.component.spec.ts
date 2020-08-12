import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannequinUiComponent } from './mannequin-ui.component';

describe('MannequinUiComponent', () => {
  let component: MannequinUiComponent;
  let fixture: ComponentFixture<MannequinUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannequinUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannequinUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
