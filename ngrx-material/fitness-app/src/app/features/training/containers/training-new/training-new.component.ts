import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-training-new',
  templateUrl: './training-new.component.html',
  styleUrls: ['./training-new.component.scss']
})
export class TrainingNewPageComponent {

  @Output() trainingStarted = new EventEmitter<void>();

  onStartTraining() {
    this.trainingStarted.emit();
  }
}
