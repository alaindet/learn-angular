import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Course, compareCourses } from './model/course';
import * as CoursesActions from './course.actions';

/*
// This
export interface FooState extends EntityState<Foo> {}

// is equivalent to
export inteface FooState {
  entities: { [id: number]: Foo };
  ids: number[];
}
*/

export interface CoursesState extends EntityState<Course> {}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  // selectId: course => course.id,

});

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CoursesActions.allCoursesLoaded, (state, action) => {
    return adapter.addAll(action.courses, state);
  })
);

export const {
  selectAll,
} = adapter.getSelectors();
