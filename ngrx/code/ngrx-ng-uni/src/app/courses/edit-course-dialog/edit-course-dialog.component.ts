import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { CoursesHttpService } from './../services/courses-http.service';
import { Course } from './../model/course';
import { courseUpdated } from './../course.actions';
import { AppState } from './../../store/reducers/index';

@Component({
  selector: 'course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {

  form: FormGroup;
  dialogTitle: string;
  course: Course;
  mode: 'create' | 'update';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    private coursesService: CoursesHttpService,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<AppState>,
  ) {
    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;
  }

  ngOnInit() {
    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []],
    };

    if (this.mode === 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...this.course });
      return;
    }

    this.form = this.fb.group({
      ...formControls,
      url: ['', Validators.required],
      iconUrl: ['', Validators.required],
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {

    const course: Course = {
      ...this.course,
      ...this.form.value
    };

    const update: Update<Course> = {
      id: course.id,
      changes: course,
    };

    this.store.dispatch(courseUpdated({ update }));
    this.dialogRef.close();
  }
}
