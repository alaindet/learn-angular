import { Component, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooComponent } from './context/foo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <p>Counter: {{ counter() }}</p>
    <p>Double counter: {{ doubleCounter() }}</p>
    <button (click)="onDecrement()">-1</button>
    &nbsp;
    <button (click)="onIncrement()">+1</button>
    <hr>
    <app-foo />
  `,
    imports: [CommonModule, FooComponent]
})
export class AppComponent {
  title = 'signals';

  counter = signal(0);
  clockRunning = signal(false);
  doubleCounter = computed(() => this.counter() * 2);
  private clockTimer?: any;
  private clockStart?: number;

  private counterTracker = effect(() => {
    console.log(`The counter value is ${this.counter()}`);
  });

  private clock = effect(onCleanup => {
    if (!this.clockRunning()) return;
    this.clockStart = Date.now();
    this.clockTimer = setInterval(() => {
      const elapsed = ((Date.now() - (this.clockStart ?? 0)) / 1000).toFixed(0);
      console.log(`${elapsed} seconds passed since last counter update`);
    }, 1000);
    onCleanup(() => clearTimeout(this!.clockTimer));
  });

  onDecrement() {
    this.counter.set(this.counter() - 1);
    this.clockRunning.set(true);
  }

  onIncrement() {
    this.counter.set(this.counter() + 1);
    this.clockRunning.set(true);
  }
}
