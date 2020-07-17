import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UiAlert } from './../../shared/ui/components/alert/alert.interface';

@Injectable()
export class UiCoreService {

  private alert$ = new BehaviorSubject<UiAlert | null>(null);

  get alert(): Observable<UiAlert | null> {
    return this.alert$.asObservable();
  }

  setAlert(alert: UiAlert | null) {
    this.alert$.next(alert);
  }
}
