import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { FooContext } from './foo-context.service';

@Component({
  selector: 'app-foo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FooContext],
  template: `
    <h1>Counters and foreign <code>signal()</code></h1>

    <section>
      <h2>Component counter</h2>
      <p>{{ counter() }}</p>
      <button (click)="decrement()">-1</button>
      <button (click)="increment()">+1</button>
    </section>

    <hr>

    <section>
      <h2>Service counter</h2>
      <p>{{ svc.counter() }}</p>
      <button (click)="svc.decrement()">-1</button>
      <button (click)="svc.increment()">+1</button>
    </section>
  `,
})
export class FooComponent {

  svc = inject(FooContext);

  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
