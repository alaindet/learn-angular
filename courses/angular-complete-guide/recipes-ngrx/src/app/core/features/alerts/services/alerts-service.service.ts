import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Alert, AlertType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {

  alerts: Alert[] = [];
  alerts$ = new BehaviorSubject<Alert[]>([]);

  add(rawAlert: Alert): void {
    const alert = {
      type: rawAlert.type ?? AlertType.Primary,
      message: rawAlert.message,
    };

    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  addSuccess(message: string): void {
    const alert = { type: AlertType.Success, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  addPrimary(message: string): void {
    const alert = { type: AlertType.Primary, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  addError(message: string): void {
    const alert = { type: AlertType.Error, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  addWarning(message: string): void {
    const alert = { type: AlertType.Warning, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  pop(): void {
    this.alerts = this.alerts.slice(0, -1);
    this.alerts$.next(this.alerts);
  }

  clear(): void {
    this.alerts$.next([]);
  }
}
