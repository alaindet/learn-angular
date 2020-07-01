import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Course } from './../model/course';
import { defaultDialogConfig } from './../shared/default-dialog-config';
import { EditCourseDialogComponent } from './../edit-course-dialog/edit-course-dialog.component';
import { AppState } from '../../store/reducers';
import { selectBeginnerCourses, selectAdvancedCourses, selectPromoTotal } from '../coures.selectors';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promoTotal$: Observable<number>;
  loading$: Observable<boolean>;
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));
    this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));
    this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

    // const courses$ = this.coursesHttpService.findAllCourses().pipe(
    //   map(courses => courses.sort(compareCourses)),
    //   shareReplay()
    // );

    // this.loading$ = courses$.pipe(map(courses => !!courses));

    // this.beginnerCourses$ = courses$.pipe(
    //   map(courses => courses.filter(course => course.category === 'BEGINNER'))
    // );


    // this.advancedCourses$ = courses$.pipe(
    //   map(courses => courses.filter(course => course.category === 'ADVANCED'))
    // );

    // this.promoTotal$ = courses$.pipe(
    //   map(courses => courses.filter(course => course.promo).length)
    // );
  }

  onAddCourse() {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
