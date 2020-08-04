import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingDialogComponent } from './../../components/stop-training-dialog/stop-training-dialog.component';
import { TrainingService } from './../../services/training.service';
import { Exercise } from './../../models/exercise.model';

@Component({
  selector: 'app-training-current',
  templateUrl: './training-current.component.html',
  styleUrls: ['./training-current.component.scss'],
})
export class TrainingCurrentPageComponent implements OnInit {

  @Input() exercise: Exercise = null;
  elapsedSeconds = 0;
  burnedCalories: number;
  clockHandle: any;
  progress = 0;

  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService,
  ) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  onStop() {
    const dialogData = {
      data: {
        progress: this.progress,
      }
    };

    clearInterval(this.clockHandle);
    const dialogRef = this.dialog.open(StopTrainingDialogComponent, dialogData);
    dialogRef.afterClosed().subscribe(this.onDialogClose.bind(this));
  }

  private startOrResumeTimer() {
    this.clockHandle = setInterval(() => this.tick(), 1000);
  }

  private tick() {
    if (this.elapsedSeconds === this.exercise.duration) {
      clearInterval(this.clockHandle);
      return;
    }
    this.elapsedSeconds += 1;
    this.progress = Math.round(100 * this.elapsedSeconds / this.exercise.duration);
    this.burnedCalories = (this.progress / 100) * this.exercise.calories;
    this.burnedCalories = Math.round(this.burnedCalories * 100) / 100;
  }

  private onDialogClose(answer: 'yes' | 'no') {

    if (answer === 'yes') {
      this.trainingService.cancelCurrentExercise(this.progress);
      return;
    }

    this.startOrResumeTimer();
  }
}
