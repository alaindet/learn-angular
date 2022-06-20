import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { CoursesModule } from '../courses.module';
import { HomeComponent } from './home.component';
import { CoursesService } from '../services/courses.service';
import { COURSES } from '../../../../server/db-data';
import { setupCourses } from '../common/setup-test-data';
import { click } from '../common/test-utils';

describe('HomeComponent', () => {

  let fixt: ComponentFixture<HomeComponent>;
  let comp: HomeComponent;
  let el: DebugElement;
  let coursesService: any;

  const beginnerCourses = setupCourses().filter(c => c.category === 'BEGINNER');

  beforeEach(waitForAsync(() => {

    const coursesServiceSpy =jasmine.createSpyObj('CoursesService', ['findAllCourses']);

    TestBed.configureTestingModule({
      imports: [
        CoursesModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesServiceSpy,
        },
      ],
    })
    .compileComponents()
    .then(() => {
      fixt = TestBed.createComponent(HomeComponent);
      comp = fixt.componentInstance;
      el = fixt.debugElement;
      coursesService = TestBed.inject(CoursesService);
    });
  }));

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('should display only beginner courses', () => {
    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixt.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    expect(tabs.length).toBe(1, 'Unexpected number of tabs found');
  });

  it('should display only advanced courses', () => {
    pending();
  });

  it('should display both tabs', () => {
    pending();
  });

  it('should display advanced courses when tab clicked', () => {
    pending();
  });
});
