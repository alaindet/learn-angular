import { Component } from '@angular/core';

import { Item } from '../../../../core/types';
import { APPLES } from '../../data/apples';

@Component({
  templateUrl: './list.component.html',
})
export class ApplesListComponent {
  items: Item[] = APPLES;
}