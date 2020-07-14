import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

import { booleanish } from 'src/app/shared/ui/common/functions/booleanish.function';
import { UiButton } from './button.interface';

@Component({
  selector: 'ui-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent implements UiButton, OnChanges {

  @Input() color: UiButton['color'] = 'primary';
  @Input() size: UiButton['size'] = 'medium';
  @Input() type: UiButton['type'] = 'button';
  @Input() isDisabled: UiButton['isDisabled'] = false;
  @Input() isUppercase: UiButton['isUppercase'] = false;
  @Input() isCircle: UiButton['isCircle'] = false;
  @Input() hasMargin: UiButton['hasMargin'] = true;
  @Input() hasIcon: UiButton['hasIcon'] = false;
  @Input() hasFullWidth: UiButton['hasFullWidth'] = false;
  @Input() hasSlots: UiButton['hasSlots'] = false;

  ngOnChanges() {
    booleanish(this, [
      'isDisabled',
      'isUppercase',
      'isCircle',
      'hasMargin',
      'hasIcon',
      'hasFullWidth',
      'hasSlots',
    ]);
  }
}
