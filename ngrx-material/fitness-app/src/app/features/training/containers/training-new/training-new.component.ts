import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TrainingService } from '../../services/training.service';
import { Exercise } from './../../models/exercise.model';

@Component({
  selector: 'app-training-new',
  templateUrl: './training-new.component.html',
  styleUrls: ['./training-new.component.scss']
})
export class TrainingNewPageComponent {

  exercises: Exercise[];
  newExerciseForm: FormGroup;

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
    this.initForm();
  }

  onSubmit() {
    if (this.newExerciseForm.invalid) {
      return;
    }
    const formValue = this.newExerciseForm.value;
    const id = formValue.training;
    this.trainingService.startExercising(id);
  }

  private initForm() {
    this.newExerciseForm = this.fb.group({
      training: ['', Validators.required],
    });
  }
}
