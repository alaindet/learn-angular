import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/features/users';
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
  private coursesService = inject(CoursesService);
  private authService = inject(AuthService);

  categories = [BEGINNER, INTERMEDIATE, ADVANCED];
  userIsAdmin = this.authService.userIsAdmin;
  courses$!: { [category in CourseCategory]: Observable<Course[]> };

  ngOnInit() {
    this.fetchCourses();
  }

  onView(courseSlug: string) {
    this.router.navigate(['courses/view', courseSlug]);
  }

  onEdit(courseSlug: string) {
    this.router.navigate(['courses/edit', courseSlug]);
  }

  onRemove(courseId: string) {
    const confirmed = confirm(`Do you want to remove course #${courseId}?`);
    if (confirmed) {
      this.coursesService.removeCourse(courseId).subscribe({
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
      [BEGINNER]: this.coursesService.loadCoursesByCategory(BEGINNER),
      [INTERMEDIATE]: this.coursesService.loadCoursesByCategory(INTERMEDIATE),
      [ADVANCED]: this.coursesService.loadCoursesByCategory(ADVANCED),
    };
  }
}
