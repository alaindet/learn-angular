import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrainingService } from './../../services/training.service';
import { Exercise } from './../../models/exercise.model';

@Component({
  selector: 'app-training-past',
  templateUrl: './training-past.component.html',
  styleUrls: ['./training-past.component.scss']
})
export class TrainingPastPageComponent implements OnInit, OnDestroy {

  exercises: Exercise[] = [];
  private subs: { [sub: string]: Subscription } = {};

  constructor(
    private trainingService: TrainingService,
  ) {}

  ngOnInit() {
    this.subs.pastExercises = this.trainingService.getPastExercises()
      .subscribe(
        (exercises: Exercise[]) => {
          this.exercises = exercises;
        }
      );
  }

  ngOnDestroy() {
    for (const sub in this.subs) {
      this.subs[sub].unsubscribe();
    }
  }
}
