import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-feature-counter-subject',
  template: `
    <h2>Counter with <code>BehaviorSubject</code></h2>

    <app-counter
      [value]="counter$ | async"
      [increaseBy]="69"
      [decreaseBy]="42"
      (increased)="onIncreased()"
      (increasedBy)="onIncreasedBy($event)"
      (decreased)="onDecreased()"
      (decreasedBy)="onDecreasedBy($event)"
    ></app-counter>
  `,
})
export class CounterSubjectFeatureComponent {

  private _counter$ = new BehaviorSubject<number>(0);

  get counter$(): Observable<number> {
    return this._counter$.asObservable();
  }

  onIncreased(): void {
    this._counter$.next(this._counter$.getValue() + 1);
  }

  onIncreasedBy(value: number): void {
    this._counter$.next(this._counter$.getValue() + value);
  }

  onDecreased(): void {
    this._counter$.next(this._counter$.getValue() - 1);
  }

  onDecreasedBy(value: number): void {
    this._counter$.next(this._counter$.getValue() - value);
  }
}
