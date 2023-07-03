import { Routes } from '@angular/router';

import { CoursesPageComponent } from './pages/courses/courses.component';
import { CreateOrEditCoursePageComponent } from './pages/create-or-edit-course/create-or-edit-course.component';
import { ViewCoursePageComponent } from './pages/view-course/view-course.component';

export const COURSES_ROUTES: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: 'create', component: CreateOrEditCoursePageComponent },
  { path: 'edit/:id', component: CreateOrEditCoursePageComponent },
  { path: 'view/:id', component: ViewCoursePageComponent },
];
