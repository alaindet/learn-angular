import { Routes } from '@angular/router';

import { CoursesPageComponent } from './pages/courses/courses.component';
import { CreateCoursePageComponent } from './pages/create-course/create-course.component';

export const COURSES_ROUTES: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: 'create', component: CreateCoursePageComponent },
];
