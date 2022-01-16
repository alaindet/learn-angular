import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increase, increaseByAmount, decrease, decreaseByAmount } from 'src/app/core/store';

// TODO
export type RootState = {
  counter: number;
};

@Component({
  selector: 'app-feature-counter-store',
  template: `
    <h2>Counter with <code>@ngrx/store</code></h2>

    <app-counter
      [value]="store.select('counter') | async"
      [increaseBy]="69"
      [decreaseBy]="42"
      (increased)="onIncreased()"
      (increasedBy)="onIncreasedBy($event)"
      (decreased)="onDecreased()"
      (decreasedBy)="onDecreasedBy($event)"
    ></app-counter>
  `,
})
export class CounterStoreFeatureComponent {

  constructor(
    public store: Store<RootState>,
  ) {}

  onIncreased(): void {
    this.store.dispatch(increase());
  }

  onIncreasedBy(value: number): void {
    this.store.dispatch(increaseByAmount({ amount: 69 }));
  }

  onDecreased(): void {
    this.store.dispatch(decrease());
  }

  onDecreasedBy(value: number): void {
    this.store.dispatch(decreaseByAmount({ amount: 42 }));
  }
}
