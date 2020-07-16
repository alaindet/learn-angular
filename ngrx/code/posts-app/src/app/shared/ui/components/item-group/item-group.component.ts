import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UiItemGroup } from './item-group.interface';

@Component({
  selector: 'ui-item-group',
  styleUrls: ['./item-group.component.scss'],
  templateUrl: './item-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiItemGroupComponent implements UiItemGroup {}
