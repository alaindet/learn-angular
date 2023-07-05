import { Routes } from '@angular/router';

import { CoursesPageComponent } from './pages/courses/courses.component';
import { CreateOrEditCoursePageComponent } from './pages/create-or-edit-course/create-or-edit-course.component';
import { ViewCoursePageComponent } from './pages/view-course/view-course.component';
import { isAdminGuard } from '../users/guards';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
  },
  {
    path: 'create',
    component: CreateOrEditCoursePageComponent,
    canActivate: [isAdminGuard],
  },
  {
    path: 'edit/:slug',
    component: CreateOrEditCoursePageComponent,
    canActivate: [isAdminGuard],
  },
  {
    path: 'view/:slug',
    component: ViewCoursePageComponent,
  },
];
