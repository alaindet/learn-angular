import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditCourseDialogComponent } from './../edit-course-dialog/edit-course-dialog.component';
import { Course } from './../model/course';
import { defaultDialogConfig } from './../shared/default-dialog-config';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent {

  @Input()
  courses: Course[];

  @Output()
  courseChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog,
  ) {}

  editCourse(course:Course) {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Edit Course",
      course,
      mode: 'update'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());
  }

  onDeleteCourse(course: Course) {
    console.log('onDeleteCourse', course);
  }
}
