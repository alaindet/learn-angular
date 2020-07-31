import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Exercise } from '../models/exercise.model';
import { EXERCISES } from '../data/available-exercises.const';

@Injectable()
export class TrainingService {

  private availableExercises: Exercise[] = EXERCISES;
  private currentExercise$ = new BehaviorSubject<Exercise | null>(null);
  private pastExercises$ = new BehaviorSubject<Exercise[]>([]);

  getAvailableExercises(): Exercise[] {
    return this.availableExercises;
  }

  getCurrentExercise(): Observable<Exercise> {
    return this.currentExercise$.asObservable();
  }

  getPastExercises(state?: Exercise['state']): Observable<Exercise[]> {

    if (state) {
      return this.pastExercises$.pipe(
        map((exercises: Exercise[]): Exercise[] => {
          return exercises.filter((exercise: Exercise): boolean => {
            return exercise.state === state;
          })
        })
      );
    }

    return this.pastExercises$.asObservable();
  }

  startExercising(id: string) {
    const exercise = this.availableExercises.find(ex => ex.id === id);
    if (exercise) {
      this.currentExercise$.next({ ...exercise });
    }
  }

  cancelCurrentExercise(progress: number) {

    const current = this.currentExercise$.value;

    const cancelledExercise: Exercise = {
      ...current,
      date: new Date(),
      state: 'cancelled',
      duration: current.duration * (progress / 100),
      calories: current.calories * (progress / 100),
    };

    this.pastExercises$.next([
      ...this.pastExercises$.value,
      cancelledExercise,
    ]);

    this.currentExercise$.next(null);
  }

  completeCurrentExercise() {

    const completedExercise: Exercise = {
      ...this.currentExercise$.value,
      date: new Date(),
      state: 'completed',
    };

    this.pastExercises$.next([
      ...this.pastExercises$.value,
      completedExercise,
    ]);

    this.currentExercise$.next(null);
  }
}
