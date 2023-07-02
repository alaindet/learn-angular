import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { COURSE_CATEGORY } from '../../../../core/types';
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
export class CoursesPageComponent {

  private svc = inject(CoursesService);

  categories = [BEGINNER, INTERMEDIATE, ADVANCED];

  courses$ = {
    [BEGINNER]: this.svc.loadCoursesByCategory(BEGINNER),
    [INTERMEDIATE]: this.svc.loadCoursesByCategory(INTERMEDIATE),
    [ADVANCED]: this.svc.loadCoursesByCategory(ADVANCED),
  };
}
