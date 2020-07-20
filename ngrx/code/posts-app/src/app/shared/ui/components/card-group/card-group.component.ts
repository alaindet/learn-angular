import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UiCardGroup } from './card-group.interface';

@Component({
  selector: 'ui-card-group',
  styleUrls: ['./card-group.component.scss'],
  templateUrl: './card-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardGroupComponent implements UiCardGroup {}
