import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';
import {
  COURSES as TEST_COURSES_OBJ,
  LESSONS as TEST_LESSONS_OBJ,
} from './../../../../server/db-data';

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
      next: () => fail('the save course should have failed'),
      error: err => expect(err.status).toBe(500),
    });

    const req = http.expectOne(`/api/courses/${TEST_ID}`);
    expect(req.request.method).toBe('PUT');
    req.flush('Save course failed', { status: 500, statusText: 'Internal Server Error' });
  });

  it('should find a list of lessons', () => {
    const TEST_ID = 12;
    const testAllLessons = Object.values(TEST_LESSONS_OBJ);
    const testLessons = testAllLessons.filter(l => l.courseId === TEST_ID);

    coursesService.findLessons(TEST_ID).subscribe(lessons => {
      expect(lessons).toBeTruthy();
      expect(lessons.length).toBe(testLessons.length);
    });

    const req = http.expectOne(req => req.url === '/api/lessons'); // Ignore querystring
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('courseId')).toBe(TEST_ID.toString());
    expect(req.request.params.get('filter')).toBe('');
    expect(req.request.params.get('sortOrder')).toBe('asc');
    expect(req.request.params.get('pageNumber')).toBe('0');
    expect(req.request.params.get('pageSize')).toBe('3');
    req.flush({ payload: testLessons });
  });
});
