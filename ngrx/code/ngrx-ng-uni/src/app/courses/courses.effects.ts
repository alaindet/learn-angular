import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';

import * as CoursesActions from './course.actions';
import { CoursesHttpService } from './services/courses-http.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesEffects {

  loadCourses$ = createEffect(
    () => this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      concatMap(action => this.coursesService.findAllCourses()),
      map(courses => CoursesActions.allCoursesLoaded({ courses })),
    )
  );

  saveCourse$ = createEffect(
    () => this.actions$.pipe(
      ofType(CoursesActions.courseUpdated),
      concatMap(action => {
        const id = action.update.id;
        const changes = action.update.changes;
        return this.coursesService.saveCourse(id, changes);
      }),
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesHttpService,
  ) {}
}
