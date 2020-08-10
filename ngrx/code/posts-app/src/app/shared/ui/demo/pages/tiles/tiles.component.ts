import { Component } from '@angular/core';

import { range } from './../../../functions/range.function';

@Component({
  styleUrls: ['./tiles.component.scss'],
  templateUrl: './tiles.component.html',
})
export class DemoUiTilesPage {
  range = range;
}
