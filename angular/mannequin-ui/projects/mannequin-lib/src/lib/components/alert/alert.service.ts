import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MannequinAlertService {

  alert$ = new BehaviorSubject<string | null>(null);

  get alert(): Observable<string | null> {
    return this.alert$.asObservable();
  }

  setAlert(alert: string) {
    this.alert$.next(alert);
  }

  clearAlert() {
    this.alert$.next(null);
  }
}
