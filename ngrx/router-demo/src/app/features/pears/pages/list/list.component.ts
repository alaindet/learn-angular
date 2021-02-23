import { Component } from '@angular/core';

import { Item } from '../../../../core/types';
import { PEARS } from '../../data/pears';

@Component({
  templateUrl: './list.component.html',
})
export class PearsListComponent {
  items: Item[] = PEARS;
}