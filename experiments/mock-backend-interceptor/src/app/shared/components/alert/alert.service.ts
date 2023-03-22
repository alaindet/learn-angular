import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { Alert, ALERT_TYPE } from './types';

@Injectable()
export class AlertService implements OnDestroy {

  private once$ = new Subject<void>();
  private _alert$ = new BehaviorSubject<Alert | null>(null);

  alert$ = this._alert$.asObservable().pipe(takeUntil(this.once$));

  ngOnDestroy() {
    this._alert$.complete();
    this.once$.next();
    this.once$.complete();
  }

  setAlert(alert: Alert) {
    this._alert$.next(alert);
  }

  dismiss() {
    this._alert$.next(null);
  }

  success(message: string) {
    this._alert$.next({ type: ALERT_TYPE.SUCCESS, message });
  }

  error(message: string) {
    this._alert$.next({ type: ALERT_TYPE.ERROR, message });
  }
}
