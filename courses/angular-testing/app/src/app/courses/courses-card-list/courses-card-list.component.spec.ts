import { DebugElement} from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesCardListComponent } from './courses-card-list.component';
import { CoursesModule } from '../courses.module';
import { COURSES } from '../../../../server/db-data';
import { sortCoursesBySeqNo } from '../home/sort-course-by-seq';
import { Course } from '../model/course';
import { setupCourses } from '../common/setup-test-data';

describe('CoursesCardListComponent', () => {

  let comp: CoursesCardListComponent;
  let compFixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CoursesModule,
        ],
      })
        .compileComponents()
        .then(() => {
          compFixture = TestBed.createComponent(CoursesCardListComponent);
          comp = compFixture.componentInstance;
          el = compFixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('should display the course list', () => {
    comp.courses = setupCourses();
    compFixture.detectChanges(); // Force change detection
    const cards = el.queryAll(By.css('.course-card'));
    expect(cards).toBeTruthy();
    expect(cards.length).toBe(comp.courses.length, 'Unexpected number of courses');
  });

  it('should display the first course', () => {
    comp.courses = setupCourses();
    compFixture.detectChanges();
    const course = comp.courses[0];
    const card = el.query(By.css('.course-card:first-child'));
    expect(card).toBeTruthy('Could not find course card');
    const title = card.query(By.css('mat-card-title'));
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    const image = card.query(By.css('img'));
    expect(image.nativeElement.src).toBe(course.iconUrl);
  });
});
