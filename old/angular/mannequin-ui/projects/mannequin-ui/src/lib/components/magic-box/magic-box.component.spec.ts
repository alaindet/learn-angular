import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannequinMagicBoxComponent } from './magic-box.component';

describe('MannequinMagicBoxComponent', () => {
  let component: MannequinMagicBoxComponent;
  let fixture: ComponentFixture<MannequinMagicBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MannequinMagicBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannequinMagicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
