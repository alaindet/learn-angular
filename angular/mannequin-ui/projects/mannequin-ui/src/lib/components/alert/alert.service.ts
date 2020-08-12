import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MannequinAlertService {

  private alert$ = new BehaviorSubject<string | null>(null);

  get alert(): Observable<string | null> {
    return this.alert$.asObservable();
  }

  setAlert(alert: string | null) {
    this.alert$.next(alert);
  }

  clearAlert() {
    this.setAlert(null);
  }
}
