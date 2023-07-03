import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Course, WriteCourseDto, COURSE_CATEGORY } from 'src/app/core/types';
import { CoursesService } from '../../services';

const FIELD = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  CATEGORY: 'category',
} as const;

const imports = [
  NgIf,
  ReactiveFormsModule,
];

@Component({
  selector: 'app-page-create-or-edit-course',
  standalone: true,
  imports,
  templateUrl: './create-or-edit-course.component.html',
})
export class CreateOrEditCoursePageComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);

  BEGINNER = COURSE_CATEGORY.BEGINNER;
  INTERMEDIATE = COURSE_CATEGORY.INTERMEDIATE;
  ADVANCED = COURSE_CATEGORY.ADVANCED;
  id = this.route.snapshot.params['id'];
  isEditing = !!this.id;
  theForm!: FormGroup;

  get fTitle() { return this.getFormField(FIELD.TITLE) }
  get fDescription() { return this.getFormField(FIELD.DESCRIPTION) }
  get fCategory() { return this.getFormField(FIELD.CATEGORY) }

  ngOnInit() {
    if (!this.isEditing) {
      this.initForm();
      return;
    }

    this.coursesService.getCourse(this.id).subscribe({
      error: err => console.error(err),
      next: course => this.initForm(course),
    });
  }

  onSubmit() {

    if (this.theForm.invalid) {
      return;
    }

    const formVal = this.theForm.value;

    const dto: WriteCourseDto = {
      title: formVal[FIELD.TITLE],
      description: formVal[FIELD.DESCRIPTION],
      categories: [formVal[FIELD.CATEGORY]],
    };

    if (this.isEditing) {
      this.coursesService.updateCourse(this.id, dto).subscribe({
        error: err => console.error(err),
        next: () => {
          console.log('Course updated');
          this.router.navigate(['/courses']);
        },
      });
      return;
    }

    this.coursesService.createCourse(dto).subscribe({
      error: err => console.error(err),
      next: newCourse => {
        console.log('Course created', newCourse);
        this.router.navigate(['/courses']);
      },
    });
  }

  private initForm(course: Course | null = null): void {
    const { required, minLength, maxLength } = Validators;

    const category = course?.categories ? course.categories[0] : '';

    this.theForm = this.formBuilder.group({
      [FIELD.TITLE]: [course?.title, [required, minLength(5), maxLength(30)]],
      [FIELD.DESCRIPTION]: [course?.description, [minLength(5), maxLength(144)]],
      [FIELD.CATEGORY]: [category, [required]],
    });
  }

  private getFormField(fieldName: string): FormControl {
    return this.theForm.get(fieldName)! as FormControl;
  }
}
