import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSquashOnScrollComponent } from './squash-on-scroll.component';

describe('TestSquashOnScrollComponent', () => {
  let component: TestSquashOnScrollComponent;
  let fixture: ComponentFixture<TestSquashOnScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestSquashOnScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSquashOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
