import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UiCoreService {

  private loading$ = new BehaviorSubject<boolean>(false);
  private loaded$ = new BehaviorSubject<boolean>(false);

  get loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  get loaded(): Observable<boolean> {
    return this.loaded$.asObservable();
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
    this.loaded$.next(!loading);
  }
}
