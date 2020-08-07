import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UiAlert } from './../../shared/ui/components/alert/alert.interface';

@Injectable()
export class UiCoreService {

  private alert$ = new BehaviorSubject<UiAlert | null>(null);
  private alertTimeout: any;
  private loading$ = new BehaviorSubject<boolean>(false);
  private loaded$ = new BehaviorSubject<boolean>(false);

  get alert(): Observable<UiAlert | null> {
    return this.alert$.asObservable();
  }

  get loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  get loaded(): Observable<boolean> {
    return this.loaded$.asObservable();
  }

  setAlert(alert: UiAlert | null, delay: number = 3000) {
    this.alert$.next(alert);
    clearTimeout(this.alertTimeout);
    this.alertTimeout = setTimeout(() => { this.alert$.next(null); }, delay);
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
    this.loaded$.next(!loading);
  }
}
