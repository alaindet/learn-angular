import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { Link } from 'src/app/core/models/link.interface';
import { TrainingService } from './../../services/training.service';
import { Exercise } from './../../models/exercise.model';

const LINKS: Partial<Link>[] = [
  { path: 'current', label: 'Current' },
  { path: 'new', label: 'New' },
  { path: 'past', label: 'Past' },
];

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingPageComponent {

  links: Partial<Link>[] = LINKS;
  activeLink: string = 'current';
  currentExercise: Exercise = null;
  isCurrentExercise = false;
  subs: { [sub: string]: Subscription } = {};

  constructor(
    private trainingService: TrainingService,
  ) {}

  ngOnInit() {
    this.subs.exercise = this.trainingService.getCurrentExercise().subscribe(
      (exercise: Exercise) => {
        this.currentExercise = exercise;
        this.isCurrentExercise = !!this.currentExercise;
      }
    );
  }

  ngOnDestroy() {
    for (const sub in this.subs) {
      this.subs[sub].unsubscribe();
    }
  }
}
