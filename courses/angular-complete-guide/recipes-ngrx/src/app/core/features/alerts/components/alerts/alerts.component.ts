import { Component, Input } from '@angular/core';

import { Alert } from '../../types';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent {
  @Input() alerts: Alert[] = [];
}
