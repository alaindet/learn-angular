import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
  const advancedCourses = setupCourses().filter(c => c.category === 'ADVANCED');

  beforeEach(waitForAsync(() => {

    const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses']);

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
    coursesService.findAllCourses.and.returnValue(of(advancedCourses));
    fixt.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    expect(tabs.length).toBe(1, 'Unexpected number of tabs found');
  });

  it('should display both tabs', () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixt.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    expect(tabs.length).toBe(2, 'Unexpected number of tabs found');
  });

  // This is an async test, since the "done" argument is passed to the callback
  it('fakeAsync: should display advanced courses when tab clicked', fakeAsync(() => {

    // Arrange
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixt.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));

    // Act: Simulate click on "Advanced" tab
    click(tabs[1]);
    fixt.detectChanges();
    flush(); // Resolves requestAnimationFrame() used by Angular Material

    // Alternative
    // This works, but requires knowledge about how requestAnimationFrame() works
    // const SIXTY_FPS = 1000 / 60;
    // tick(SIXTY_FPS);

    // Assert
    const cards = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
    expect(cards.length).toBeGreaterThan(0, 'Could not find card titles');
    expect(cards[0].nativeElement.textContent).toContain('Angular Security Course');
  }));

  // Same as above, but uses waitForAsync()
  it(
    'waitForAsync: should display advanced courses when tab clicked',
    waitForAsync(() => {

      // Arrange
      coursesService.findAllCourses.and.returnValue(of(setupCourses()));
      fixt.detectChanges();
      const tabs = el.queryAll(By.css('.mat-tab-label'));

      // Act: Simulate click on "Advanced" tab
      click(tabs[1]);
      fixt.detectChanges();

      // Assert
      // From the doc
      // Get a promise that resolves when the fixture is stable.
      // This can be used to resume testing after events have triggered asynchronous activity or asynchronous change detection.
      fixt.whenStable().then(() => {
        const cards = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
        expect(cards.length).toBeGreaterThan(0, 'Could not find card titles');
        expect(cards[0].nativeElement.textContent).toContain('Angular Security Course');
      });
    })
  );
});
