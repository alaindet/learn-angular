import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { AlertType } from '../../types';
import { formatCssDuration } from '@/shared/utils';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {

  @Input() type: AlertType = AlertType.Primary;
  @Input() message: string;
  @Input() isAdding = false;
  @Input() isDismissing = false;

  @Input('addingDuration')
  set addingDurationInput(durationInMilliseconds: number) {
    this.addingDuration = formatCssDuration(durationInMilliseconds);
  }

  @Input('dismissingDuration')
  set dismissingDurationInput(durationInMilliseconds: number) {
    this.dismissingDuration = formatCssDuration(durationInMilliseconds);
  }

  @HostBinding('style.--adding-duration')
  addingDuration = '1s';

  @HostBinding('style.--dismissing-duration')
  dismissingDuration = '1s';

  @Output() dismissed = new EventEmitter<void>();
}
