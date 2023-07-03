import { Component, OnInit, inject } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Course, WriteCourseDto, COURSE_CATEGORY } from 'src/app/core/types';
import { BreadcrumbComponent, BreadcrumbsComponent } from 'src/app/common/components';
import { CoursesService } from '../../services';

const FIELD = {
  TITLE: { id: 'title', minLen: 5, maxLen: 30 },
  DESCRIPTION: { id: 'description', minLen: 5, maxLen: 144 },
  CATEGORY: { id: 'category' },
} as const;

const imports = [
  NgIf,
  JsonPipe,
  ReactiveFormsModule,
  BreadcrumbsComponent,
  BreadcrumbComponent,
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
  slug = this.route.snapshot.params['slug'];
  isEditing = !!this.slug;
  theForm!: FormGroup;
  course: Course | null = null;
  FIELD = FIELD;

  get fTitle() { return this.getFormField(FIELD.TITLE.id) }
  get fDescription() { return this.getFormField(FIELD.DESCRIPTION.id) }
  get fCategory() { return this.getFormField(FIELD.CATEGORY.id) }

  ngOnInit() {
    if (!this.isEditing) {
      this.initForm();
      return;
    }

    this.coursesService.findCourseBySlug(this.slug).subscribe({
      error: err => console.error(err),
      next: course => {
        this.course = course;
        this.initForm(course);
      },
    });
  }

  onSubmit() {

    if (this.theForm.invalid || !this.course) {
      return;
    }

    const formVal = this.theForm.value;

    const dto: WriteCourseDto = {
      title: formVal[FIELD.TITLE.id],
      slug: this.course?.slug ?? '',
      description: formVal[FIELD.DESCRIPTION.id],
      categories: [formVal[FIELD.CATEGORY.id]],
    };

    if (this.isEditing) {
      this.coursesService.updateCourse(this.course.id, dto).subscribe({
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
      [FIELD.TITLE.id]: [course?.title, [
        required,
        minLength(FIELD.TITLE.minLen),
        maxLength(FIELD.TITLE.maxLen),
      ]],
      [FIELD.DESCRIPTION.id]: [course?.description, [
        minLength(FIELD.DESCRIPTION.minLen),
        maxLength(FIELD.DESCRIPTION.maxLen),
      ]],
      [FIELD.CATEGORY.id]: [category, [
        required,
      ]],
    });
  }

  private getFormField(fieldName: string): FormControl {
    return this.theForm.get(fieldName)! as FormControl;
  }
}
