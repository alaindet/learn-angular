import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';
import { COURSES as TEST_COURSES_OBJ } from './../../../../server/db-data';

describe('CoursesService', () => {

  let coursesService: CoursesService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CoursesService,
      ],
    });

    coursesService = TestBed.inject(CoursesService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no unmatched requests are outstanding.
    http.verify();
  });

  it('should retrieve all courses', () => {
    const TEST_COURSES = Object.values(TEST_COURSES_OBJ);

    coursesService.findAllCourses().subscribe(courses => {
      expect(courses).toBeTruthy('No courses returned');
      expect(courses.length).toBe(TEST_COURSES.length, 'Wrong number of courses');
      const course = courses.find(c => c.id === 12);
      expect(course.titles.description).toBe('Angular Testing Course');
    });

    const req = http.expectOne('/api/courses');
    expect(req.request.method).toBe('GET');
    req.flush({ payload: TEST_COURSES }); // Mocked data
  });

  it('should find a course by its ID', () => {
    const TEST_ID = 12;

    coursesService.findCourseById(TEST_ID).subscribe(course => {
      expect(course).toBeTruthy();
      expect(course.id).toBe(TEST_ID);
    });

    const req = http.expectOne(`/api/courses/${TEST_ID}`);
    expect(req.request.method).toBe('GET');
    req.flush(TEST_COURSES_OBJ[TEST_ID]);
  });

  it('should save the course data', () => {
    const TEST_ID = 12;
    const TEST_COURSE_CHANGE = {
      titles: {
        description: 'Let\'s check if this gets changed',
      },
    };

    coursesService.saveCourse(TEST_ID, TEST_COURSE_CHANGE).subscribe(course => {
      expect(course.id).toBe(TEST_ID);
    });

    const req = http.expectOne(`/api/courses/${TEST_ID}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.titles.description).toBe(TEST_COURSE_CHANGE.titles.description);
    req.flush({ ...TEST_COURSES_OBJ[TEST_ID], ...TEST_COURSE_CHANGE });
  });

  it('should return an error if save course fails', () => {
    const TEST_ID = 12;
    const TEST_COURSE_CHANGE = {
      titles: {
        description: 'Let\'s check if this gets changed',
      },
    };

    coursesService.saveCourse(TEST_ID, TEST_COURSE_CHANGE).subscribe({
      next: course => fail('the save course should have failed'),
      error: err => {

      },
    });
  });
});
