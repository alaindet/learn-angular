import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import { UiFormCheckbox } from './checkbox.interface';

@Component({
  selector: 'ui-form-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormCheckboxComponent implements UiFormCheckbox {

  @Input() shape: UiFormCheckbox['shape'] = 'rounded';
  @Input() size: UiFormCheckbox['size'] = 'medium';
  @Input() color: UiFormCheckbox['color'] = 'primary';
}
