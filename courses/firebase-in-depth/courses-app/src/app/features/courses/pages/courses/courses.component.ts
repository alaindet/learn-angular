import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Observable } from 'rxjs';

import { COURSE_CATEGORY, Course, CourseCategory } from '../../../../core/types';
import { CoursesService } from '../../services';

const { BEGINNER, INTERMEDIATE, ADVANCED } = COURSE_CATEGORY;

const imports = [
  NgIf,
  NgFor,
  NgTemplateOutlet,
  AsyncPipe,
  RouterLink,
];

@Component({
  selector: 'app-page-courses',
  standalone: true,
  imports,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesPageComponent implements OnInit {

  private router = inject(Router);
  private svc = inject(CoursesService);

  categories = [BEGINNER, INTERMEDIATE, ADVANCED];

  courses$!: { [category in CourseCategory]: Observable<Course[]> };

  ngOnInit() {
    this.fetchCourses();
  }

  onView(courseId: string) {
    this.router.navigate(['courses/view', courseId]);
  }

  onEdit(courseId: string) {
    this.router.navigate(['courses/edit', courseId]);
  }

  onRemove(courseId: string) {
    const confirmed = confirm(`Do you want to remove course #${courseId}?`);
    if (confirmed) {
      this.svc.removeCourse(courseId).subscribe({
        error: err => console.error(err),
        next: () => {
          console.log(`Course #${courseId} removed`);
          this.fetchCourses();
        },
      });
    }
  }

  private fetchCourses(): void {
    this.courses$ = {
      [BEGINNER]: this.svc.loadCoursesByCategory(BEGINNER),
      [INTERMEDIATE]: this.svc.loadCoursesByCategory(INTERMEDIATE),
      [ADVANCED]: this.svc.loadCoursesByCategory(ADVANCED),
    };
  }
}
