import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import { UiFormCheckbox } from './checkbox.interface';

@Component({
  selector: 'ui-form-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormCheckboxComponent implements UiFormCheckbox {

  @Input() shape: UiFormCheckbox['shape'] = 'round';
  @Input() size: UiFormCheckbox['size'] = 'small';
  @Input() color: UiFormCheckbox['color'] = 'primary';
}
