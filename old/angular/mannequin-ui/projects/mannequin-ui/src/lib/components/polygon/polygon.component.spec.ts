import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannequinPolygonComponent } from './polygon.component';

describe('MannequinPolygonComponent', () => {
  let component: MannequinPolygonComponent;
  let fixture: ComponentFixture<MannequinPolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MannequinPolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannequinPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
