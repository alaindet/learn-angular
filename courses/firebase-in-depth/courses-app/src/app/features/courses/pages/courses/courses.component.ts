import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Course } from 'src/app/core/types/courses';
import { CoursesService } from '../../services';

const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
];

@Component({
  selector: 'app-page-courses',
  standalone: true,
  imports,
  templateUrl: './courses.component.html',
})
export class CoursesPageComponent implements OnInit {

  private router = inject(Router);
  private svc = inject(CoursesService);

  beginnerCourses$!: Observable<Course[]>;
  advancedCourses$!: Observable<Course[]>;

  ngOnInit() {
    this.fetchCourses();
  }

  private fetchCourses(): void {
    this.beginnerCourses$ = this.svc.loadCoursesByCategory('Beginner');
    this.advancedCourses$ = this.svc.loadCoursesByCategory('Intermediate');
  }
}
