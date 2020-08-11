import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UiTile } from './tile.interface';

@Component({
  selector: 'ui-tile',
  styleUrls: ['./tile.component.scss'],
  templateUrl: './tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTileComponent implements UiTile {

}
