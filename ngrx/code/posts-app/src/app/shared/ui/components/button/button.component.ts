import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {}
