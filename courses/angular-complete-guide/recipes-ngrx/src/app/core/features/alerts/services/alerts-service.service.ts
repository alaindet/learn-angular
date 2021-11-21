import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RuntimeAlert, Alert, AlertType } from '../types';
import { removeAt } from '@/shared/utils';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {

  alerts: RuntimeAlert[] = [];
  timers: any[] = [];
  delay = 3000;
  _alerts$ = new BehaviorSubject<RuntimeAlert[]>([]);
  alerts$ = this._alerts$.asObservable();

  add(rawAlert: Alert): void {
    const alert = {
      type: rawAlert.type ?? AlertType.Primary,
      message: rawAlert.message,
    };

    this.alerts = [alert, ...this.alerts];
    this._alerts$.next(this.alerts);
  }

  addSuccess(message: string): void {
    const alert = { type: AlertType.Success, message };
    this.alerts = [alert, ...this.alerts];
    this._alerts$.next(this.alerts);
  }

  addPrimary(message: string): void {
    const alert = { type: AlertType.Primary, message };
    this.alerts = [alert, ...this.alerts];
    this._alerts$.next(this.alerts);
  }

  addError(message: string): void {
    const alert = { type: AlertType.Error, message };
    this.alerts = [alert, ...this.alerts];
    this._alerts$.next(this.alerts);
  }

  addWarning(message: string): void {
    const alert = { type: AlertType.Warning, message };
    this.alerts = [alert, ...this.alerts];
    this._alerts$.next(this.alerts);
  }

  pop(): void {
    this.alerts = this.alerts.slice(0, -1);
    this._alerts$.next(this.alerts);
  }

  dismiss(index: number): void {
    this.alerts = removeAt(this.alerts, index);
    this._alerts$.next(this.alerts);
  }

  clear(): void {
    this._alerts$.next([]);
  }

  private startTimeout(): RuntimeAlert['timer'] {
    return setTimeout(() => {
      // TODO
    }, this.delay);
  }
}
