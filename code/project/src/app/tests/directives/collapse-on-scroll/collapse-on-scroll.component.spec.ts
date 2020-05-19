import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseOnScrollComponent } from './collapse-on-scroll.component';

describe('CollapseOnScrollComponent', () => {
  let component: CollapseOnScrollComponent;
  let fixture: ComponentFixture<CollapseOnScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseOnScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
