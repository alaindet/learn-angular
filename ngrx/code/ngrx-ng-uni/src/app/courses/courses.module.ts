import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityMetadataMap, EntityDefinitionService } from '@ngrx/data';

import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { CoursesResolver } from './services/courses.resolver';
import { CoursesEffects } from './courses.effects';
import { coursesReducer } from './courses.reducers';
import { CourseEntityService } from './services/course-entity.service';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      courses: CoursesResolver,
    },
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    resolve: {
      courses: CoursesResolver,
    },
  }
];

const entityMetadata: EntityMetadataMap = {
  Course: {}
};

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
    StoreModule.forFeature('courses', coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  providers: [
    CourseEntityService,
    CoursesResolver,
  ],
  entryComponents: [EditCourseDialogComponent],
})
export class CoursesModule {
  constructor(
    private eds: EntityDefinitionService,
  ) {
    eds.registerMetadataMap(entityMetadata);
  }
}
