import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { UiGhostDots } from './ghost-dots.interface';

@Component({
  selector: 'ui-ghost-dots',
  styleUrls: ['./ghost-dots.component.scss'],
  templateUrl: './ghost-dots.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGhostDotsComponent implements UiGhostDots {

  @Input() size: UiGhostDots['size'] = 'medium';
}
