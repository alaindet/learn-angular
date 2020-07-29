import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingDialogComponent } from './../../components/stop-training-dialog/stop-training-dialog.component';

@Component({
  selector: 'app-training-current',
  templateUrl: './training-current.component.html',
  styleUrls: ['./training-current.component.scss']
})
export class TrainingCurrentPageComponent implements OnInit {

  @Output() trainingExited = new EventEmitter<void>();
  intervalHande: any;
  progress = 0;

  constructor(
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  onStop() {
    clearInterval(this.intervalHande);
    const dialogRef = this.dialog.open(StopTrainingDialogComponent, { data: {
      progress: this.progress,
    }});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.trainingExited.emit();
        return;
      }
      if (result === 'no') {
        this.startOrResumeTimer();
        return;
      }
    });
  }

  private startOrResumeTimer() {
    this.intervalHande = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(this.intervalHande);
        return;
      }
      this.progress += 10;
    }, 1000);
  }
}
