import { Component } from '@angular/core';

import { Link } from 'src/app/core/models/link.interface';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingPageComponent {

  ongoingTraining = false;
  activeLink: string = 'current'
  links: Link[] = [
    {
      path: 'current',
      label: 'Current',
    },
    {
      path: 'new',
      label: 'New',
    },
    {
      path: 'past',
      label: 'Past',
    }
  ];

  onTrainingStart() {
    this.ongoingTraining = true;
  }

  onTrainingExit() {
    console.log('onTrainingExit');
  }
}
