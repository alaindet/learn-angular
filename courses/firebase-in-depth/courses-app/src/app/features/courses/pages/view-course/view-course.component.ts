import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { CoursesService } from '../../services';
import { Course } from 'src/app/core/types';
import { BreadcrumbComponent, BreadcrumbsComponent } from 'src/app/common/components';

const imports = [
  NgIf,
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

  ngOnInit() {
    this.coursesService.findCourseBySlug(this.slug).subscribe({
      error: err => console.error(err),
      next: course => {

        if (course === null) {
          console.error(`Course not found with slug "${this.slug}"`);
          this.router.navigate(['/courses']);
          return;
        }

        this.course = course;
      },
    });
  }
}
