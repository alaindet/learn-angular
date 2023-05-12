import { Component, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Counter: {{ counter() }}</p>
    <p>Double counter: {{ doubleCounter() }}</p>
    <button (click)="onDecrement()">-1</button>
    &nbsp;
    <button (click)="onIncrement()">+1</button>
  `,
})
export class AppComponent {
  title = 'signals';

  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);
  private clockTimer?: any;
  private clockStart?: number;

  private counterTracker = effect(() => {
    console.log(`The counter value is ${this.counter()}`);
  });

  private clock = effect(onCleanup => {

    this.counter(); // <-- This is the effect's the dependency
    this.clockStart = Date.now();
    this.clockTimer = setInterval(() => {
      const elapsed = ((Date.now() - (this.clockStart ?? 0)) / 1000).toFixed(0);
      console.log(`${elapsed} seconds passed since last counter update`);
    }, 1000);

    onCleanup(() => clearTimeout(this!.clockTimer));
  });

  onDecrement() {
    this.counter.set(this.counter() - 1);
  }

  onIncrement() {
    this.counter.set(this.counter() + 1);
  }
}
