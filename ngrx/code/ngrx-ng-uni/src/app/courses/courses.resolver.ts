import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, filter, first, finalize } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { AppState } from '../store/reducers';
import { loadAllCourses } from './course.actions';
import { areCoursesLoaded } from './coures.selectors';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<any> {

  loading = false;

  constructor(
    private store: Store<AppState>,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap(coursesLoaded => {
        if (!this.loading && !coursesLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter(coursesLoaded => coursesLoaded),
      first(),
      finalize(() => { this.loading = false; }),
    );
  }
}
