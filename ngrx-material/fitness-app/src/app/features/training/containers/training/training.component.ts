import { Component } from '@angular/core';

import { Link } from 'src/app/core/models/link.interface';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingPageComponent {

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
}
