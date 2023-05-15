import { Injectable, signal } from '@angular/core';

@Injectable()
export class FooContext {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
