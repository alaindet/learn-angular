import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableHeaderComponent } from './collapsable-header.component';

describe('CollapsableHeaderComponent', () => {
  let component: CollapsableHeaderComponent;
  let fixture: ComponentFixture<CollapsableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
