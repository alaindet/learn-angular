import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UiAlert } from './../../shared/ui/components/alert/alert.interface';

@Injectable()
export class UiCoreService {

  private alert$ = new BehaviorSubject<UiAlert | null>(null);
  private timeout: any;

  get alert(): Observable<UiAlert | null> {
    return this.alert$.asObservable();
  }

  setAlert(alert: UiAlert | null, delay: number = 3000) {
    this.alert$.next(alert);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => { this.alert$.next(null); }, delay);
  }
}
