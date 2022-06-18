import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';

import { Course} from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
})
export class CourseDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [this.course.titles.description, Validators.required],
      category: [this.course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [this.course.titles.longDescription, Validators.required],
    });
  }

  save() {
    const val = this.form.value;
    const changes = {
      titles: {
        description: val.description,
        longDescription: val.longDescription,
      },
    };

    this.coursesService.saveCourse(this.course.id, changes)
      .pipe(tap(() => this.dialogRef.close(this.form.value)))
      .subscribe();
  }

  close() {
    this.dialogRef.close();
  }
}
