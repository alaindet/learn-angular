import { Component } from '@angular/core';

import { Link } from 'src/app/core/models/link.interface';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingPageComponent {

  activeLink: string = '/training/current'
  links: Link[] = [
    {
      path: '/training/current',
      label: 'Current',
    },
    {
      path: '/training/new',
      label: 'New',
    },
    {
      path: '/training/past',
      label: 'Past',
    }
  ];
}
