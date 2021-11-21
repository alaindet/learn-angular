import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AlertType } from '../../types';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() type: AlertType = AlertType.Primary;
  @Input() message: string;
  @Output() dismissed = new EventEmitter<void>();
}
