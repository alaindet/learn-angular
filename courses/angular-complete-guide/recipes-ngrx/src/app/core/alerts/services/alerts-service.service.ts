import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Alert, AlertType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {

  alerts: Alert[] = [];
  alerts$ = new BehaviorSubject<Alert[]>([]);

  set(rawAlert: Alert): void {
    const alert = {
      type: rawAlert.type ?? AlertType.Primary,
      message: rawAlert.message,
    };

    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  setSuccess(message: string): void {
    const alert = { type: AlertType.Success, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  setPrimary(message: string): void {
    const alert = { type: AlertType.Primary, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  setError(message: string): void {
    const alert = { type: AlertType.Error, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  setWarning(message: string): void {
    const alert = { type: AlertType.Warning, message };
    this.alerts = [alert, ...this.alerts];
    this.alerts$.next(this.alerts);
  }

  clear(): void {
    this.alerts$.next(null);
  }
}
