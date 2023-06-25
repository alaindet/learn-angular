import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectUiNotification, selectUiNotificationsExist, uiNotificationsActions } from './core/store/ui';
import { NotificationType } from './common/types';

const imports = [
  NgIf,
  RouterOutlet,
  JsonPipe,
  AsyncPipe,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private store = inject(Store);
  notificationExists = this.store.selectSignal(selectUiNotificationsExist);
  notification = this.store.selectSignal(selectUiNotification);
  notification$ = this.store.select(selectUiNotification);
  NotificationType = NotificationType;

  onAddError() {
    const message = 'An error occurred';
    this.store.dispatch(uiNotificationsActions.addError({ message }));
  }

  onAddSuccess() {
    const message = 'Something great happened';
    this.store.dispatch(uiNotificationsActions.addSuccess({ message }));
  }

  onDismissAlert() {
    this.store.dispatch(uiNotificationsActions.dismiss());
  }
}
