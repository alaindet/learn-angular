import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { Course } from '../core/models/course';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css'],
})
export class CoursesCardListComponent {

  @Input() courses: Course[];

  @Output() courseEdited = new EventEmitter();
  @Output() courseDeleted = new EventEmitter<Course>();

  constructor(
    private dialog: MatDialog,
  ) {}

  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '400px';
    dialogConfig.data = course;

    this.dialog
      .open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(val => {
        if (!val) return;
        this.courseEdited.emit();
      });
  }
}
