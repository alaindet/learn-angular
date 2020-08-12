import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UiAlert } from './alert.interface';

type NullableAlert = Partial<UiAlert> | null;

@Injectable({
  providedIn: 'root',
})
export class UiAlertService {

  private alert$ = new BehaviorSubject<NullableAlert>(null);

  get alert(): Observable<NullableAlert> {
    return this.alert$.asObservable();
  }

  setAlert(alert: NullableAlert) {
    this.alert$.next(alert);
  }

  clearAlert() {
    this.alert$.next(null);
  }
}
