import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RuntimeAlert, Alert, AlertType } from '../types';
import { removeAt } from '@/shared/utils';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {

  private alerts: RuntimeAlert[] = [];
  private automaticDismissDelay = 3000;
  private addingAnimationDuration = 150;
  private dismissingAnimationDuration = 150;
  private _alerts$ = new BehaviorSubject<RuntimeAlert[]>([]);

  alerts$ = this._alerts$.asObservable();

  add(rawAlert: Alert): void {

    const id = rawAlert.message.replace(/[^a-zA-Z0-9]/, '') + Date.now();

    const alert: RuntimeAlert = {
      type: rawAlert.type ?? AlertType.Primary,
      message: rawAlert.message,
      id,
      timer: this.dismissAutomatically(id),
      isAdding: true,
      addingDuration: this.addingAnimationDuration,
      isDismissing: false,
      dismissingDuration: this.dismissingAnimationDuration,
    };

    this.alerts = [alert, ...this.alerts];
    this._alerts$.next(this.alerts);
  }

  addSuccess(message: string): void {
    this.add({ type: AlertType.Success, message });
  }

  addPrimary(message: string): void {
    this.add({ type: AlertType.Primary, message });
  }

  addError(message: string): void {
    this.add({ type: AlertType.Error, message });
  }

  addWarning(message: string): void {
    this.add({ type: AlertType.Warning, message });
  }

  pop(): void {
    clearTimeout(this.alerts[this.alerts.length-1].timer);
    this.alerts = this.alerts.slice(0, -1);
    this._alerts$.next(this.alerts);
  }

  dismiss(index: number): void {
    clearTimeout(this.alerts[index].timer);
    this.animateAndDismiss(index);
  }

  clear(): void {
    for (const alert of this.alerts) {
      clearTimeout(alert.timer);
    }
    this._alerts$.next([]);
  }

  private dismissAutomatically(id: string): RuntimeAlert['timer'] {
    return setTimeout(() => {
      const index = this.alerts.findIndex(alert => alert.id === id);
      this.animateAndDismiss(index);
    }, this.automaticDismissDelay);
  }

  private animateAndDismiss(index: number): void {
    this.alerts = this.alerts.map((alert, anIndex) => {
      return anIndex === index ? { ...alert, isDismissing: true } : alert;
    });
    this._alerts$.next(this.alerts);
    setTimeout(() => {
      this.alerts = removeAt(this.alerts, index);
      this._alerts$.next(this.alerts);
    }, this.dismissingAnimationDuration);
  }
}
