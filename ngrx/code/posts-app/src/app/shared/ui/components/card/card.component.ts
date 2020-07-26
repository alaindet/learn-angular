import { Component, ChangeDetectionStrategy} from '@angular/core';

import { UiCard } from './card.interface';

@Component({
  selector: 'ui-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent implements UiCard {}
