import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { UiAlert } from './alert.interface';

@Component({
  selector: 'ui-alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAlertComponent implements UiAlert {

  @Input() message: UiAlert['message'];
  @Input() type: UiAlert['type'] = 'success';
  @Output() dismissed = new EventEmitter<boolean>();

  onDismiss() {
    this.dismissed.emit(true);
  }
}
