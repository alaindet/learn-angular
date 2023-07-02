import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateCourseDto } from 'src/app/core/types';
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
  selector: 'app-page-create-course',
  standalone: true,
  imports,
  templateUrl: './create-course.component.html',
})
export class CreateCoursePageComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private coursesService = inject(CoursesService);

  theForm!: FormGroup;

  get fTitle() { return this.getFormField(FIELD.TITLE) }
  get fDescription() { return this.getFormField(FIELD.DESCRIPTION) }
  get fCategory() { return this.getFormField(FIELD.CATEGORY) }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {

    if (this.theForm.invalid) {
      return;
    }

    const formVal = this.theForm.value;

    const dto: CreateCourseDto = {
      title: formVal[FIELD.TITLE],
      description: formVal[FIELD.DESCRIPTION],
      categories: [formVal[FIELD.CATEGORY]],
    };

    this.coursesService.createCourse(dto).subscribe({
      error: err => console.error(err),
      next: () => {
        console.log('Course created');
        this.router.navigate(['/courses']);
      },
    });
  }

  private initForm(): void {
    const { required, minLength, maxLength } = Validators;

    this.theForm = this.formBuilder.group({
      [FIELD.TITLE]: ['', [required, minLength(5), maxLength(30)]],
      [FIELD.DESCRIPTION]: ['', [minLength(5), maxLength(144)]],
      [FIELD.CATEGORY]: ['beginner', [required]],
    });
  }

  private getFormField(fieldName: string): FormControl {
    return this.theForm.get(fieldName)! as FormControl;
  }
}
