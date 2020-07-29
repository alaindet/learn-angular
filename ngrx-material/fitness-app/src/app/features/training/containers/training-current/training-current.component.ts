import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-current',
  templateUrl: './training-current.component.html',
  styleUrls: ['./training-current.component.scss']
})
export class TrainingCurrentPageComponent implements OnInit {

  intervalHande: any;
  progress = 0;

  ngOnInit() {
    this.intervalHande = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(this.intervalHande);
        return;
      }
      this.progress += 10;
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalHande);
  }
}
