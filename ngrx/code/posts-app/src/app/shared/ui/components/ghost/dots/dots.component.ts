import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

import { toBoolean } from 'src/app/shared/ui/common/functions/to-boolean.function';
import { UiGhostDots } from './dots.interface';

@Component({
  selector: 'ui-ghost-dots',
  styleUrls: ['./dots.component.scss'],
  templateUrl: './dots.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGhostDotsComponent implements UiGhostDots, OnChanges {

  @Input() size: UiGhostDots['size'] = 'medium';
  @Input() float: UiGhostDots['float'] = true;

  ngOnChanges() {
    this.float = toBoolean(this.float);
  }
}
