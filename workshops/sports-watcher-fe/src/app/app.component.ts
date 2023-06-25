import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectUiNotification, selectUiNotificationsExist, uiNotificationsActions } from './core/store/ui';
import { NotificationType } from './common/types';
import { signInActions } from './features/user/store';

const imports = [
  NgIf,
  RouterOutlet,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  private store = inject(Store);
  notificationExists = this.store.selectSignal(selectUiNotificationsExist);
  notification = this.store.selectSignal(selectUiNotification);
  NotificationType = NotificationType;

  ngOnInit() {
    this.store.dispatch(signInActions.autoSignIn());
  }

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
