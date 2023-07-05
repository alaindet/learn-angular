import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { of, switchMap, throwError } from 'rxjs';

import { Course, Lesson } from 'src/app/core/types';
import { BreadcrumbComponent, BreadcrumbsComponent } from 'src/app/common/components';
import { CoursesService } from '../../services';
import { QueryDocumentSnapshot } from 'firebase/firestore';

const imports = [
  NgIf,
  NgFor,
  BreadcrumbsComponent,
  BreadcrumbComponent,
];

@Component({
  selector: 'app-page-view-course',
  standalone: true,
  imports,
  templateUrl: './view-course.component.html',
})
export class ViewCoursePageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private coursesService = inject(CoursesService);

  course!: Course;
  slug = this.route.snapshot.params['slug'];
  lessons!: Lesson[];
  lessonsCursor = signal<QueryDocumentSnapshot<any> | 0 | null>(0);
  lessonsShowLoadMore = computed(() => this.lessonsCursor() !== null);
  lessonsPageSize = 1;

  ngOnInit() {
    this.coursesService.findCourseBySlug(this.slug)
      .pipe(
        switchMap(course => {
          if (course !== null) return of(course);
          const message = `Course not found with slug "${this.slug}"`;
          return throwError(() => Error(message));
        }),
      )
      .subscribe({
        error: err => {
          console.error(err);
          this.router.navigate(['/courses']);
        },
        next: course => {
          this.course = course;
          this.fetchLessons('set');
        },
      });
  }

  onLoadMoreLessons() {
    this.fetchLessons('append');
  }

  private fetchLessons(writeMode: 'set' | 'append'): void {

    if (this.lessonsCursor() === null) {
      return;
    }

    const id = this.course.id;
    const cursor = this.lessonsCursor()!;
    const pageSize = this.lessonsPageSize;

    this.coursesService.findLessons(id, 'asc', cursor, pageSize).subscribe({
      error: err => console.error(err),
      next: ({ lessons, lastLessonCursor }) => {

        this.lessonsCursor.set(lastLessonCursor ?? null);

        switch(writeMode) {
          case 'set':
            this.lessons = lessons;
            break;
          case 'append':
            this.lessons = [...this.lessons, ...lessons];
            break;
        }
      },
    });
  }
}
