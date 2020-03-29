import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTemplateComponent } from './use-template.component';

describe('UseTemplateComponent', () => {
  let component: UseTemplateComponent;
  let fixture: ComponentFixture<UseTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
