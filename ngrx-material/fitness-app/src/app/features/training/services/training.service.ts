import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Exercise } from '../models/exercise.model';
import { EXERCISES } from '../data/available-exercises.const';

@Injectable()
export class TrainingService {

  private currentExercise$ = new Subject<Exercise | null>();
  private exercises: Exercise[] = EXERCISES;

  getAvailableExercises(): Exercise[] {
    return this.exercises;
  }

  getCurrentExercise(): Observable<Exercise> {
    return this.currentExercise$.asObservable();
  }

  startExercising(id: string) {
    const exercise = this.exercises.find(ex => ex.id === id);
    if (exercise) {
      this.currentExercise$.next({ ...exercise });
    }
  }

  stopExercising() {
    this.currentExercise$.next(null);
  }
}
