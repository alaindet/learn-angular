import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CourseComponent } from './features/courses/course/course.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses/:courseUrl', component: CourseComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
