import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

import { toBoolean } from 'src/app/shared/ui/functions/to-boolean.function';
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
    this.isDisabled = toBoolean(this.isDisabled);
    this.isUppercase = toBoolean(this.isUppercase);
    this.isCircle = toBoolean(this.isCircle);
    this.hasMargin = toBoolean(this.hasMargin);
    this.hasIcon = toBoolean(this.hasIcon);
    this.hasFullWidth = toBoolean(this.hasFullWidth);
    this.hasSlots = toBoolean(this.hasSlots);
  }
}
