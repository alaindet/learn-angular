import { Component, Input } from '@angular/core';

import { AlertType } from '../../types';

@Component({
  selector: 'app-alert',
  template: `<div class="alert alert-{{ type }}" role="alert">{{ message }}</div>`,
})
export class AlertComponent {
  @Input() type: AlertType = AlertType.Primary;
  @Input() message: string;
}
