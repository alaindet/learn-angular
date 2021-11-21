import { Component, Input } from '@angular/core';

import { Alert } from '../../types';

@Component({
  selector: 'app-alerts',
  template: `
    <app-alert
      *ngFor="let alert in alerts"
      [type]="alert.type"
      [message]="alert.message"
    ></app-alert>
  `,
})
export class AlertsComponent {
  @Input() alerts: Alert[] = [];
}
