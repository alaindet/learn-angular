import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Async Testing Examples', () => {

  // Basic way for one async operation only
  it('With Jasmine done()', (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      test = true;
      expect(test).toBeTrue();
      done();
    }, 100);
  });

  it('With tick()', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      test = true;
      expect(test).toBeTrue();
    }, 100);

    // Simulate passage of time
    tick(100);
  }));

  it('With flush()', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      test = true;
    }, 100);

    // flush () - Flushes any pending microtasks and simulates the
    // asynchronou passage of time for the timers in the fakeAsync zone
    // by draining the macrotask queue until it is empty.
    flush();
    expect(test).toBeTrue();
  }));

  // Test promise-based code
  it('With plain Promise', fakeAsync(() => {
    console.log('1. Arrange');
    let test = false;

    setTimeout(() => console.log('6. setTimeout 1'));
    setTimeout(() => console.log('7. setTimeout 2'));

    // Promises are microtasks, which get flushed before any other timer
    Promise.resolve()
      .then(() => {
        console.log('2. Promise 1');
        return Promise.resolve();
      })
      .then(() => {
        console.log('3. Promise 2');
        return Promise.resolve();
      })
      .then(() => {
        console.log('4. Promise 3');
        test = true;
      });

    // This forces queued Promises to resolve, but no any other timer
    flushMicrotasks();

    console.log('5. Assert');
    expect(test).toBeTrue();

    // Now flush the remaining timers
    flush();
  }));

  // Mixed examples
  it('With promises and setTimeouts', fakeAsync(() => {
    let counter = 0;

    Promise.resolve()
      .then(() => {
        counter += 10;
        setTimeout(() => {
          counter += 1;
        }, 100);
      });

    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    tick(50);
    expect(counter).toBe(10);
    tick(50);
    expect(counter).toBe(11);
  }));

  // Testing observables
  it('With observables', fakeAsync(() => {
    let test = false;
    const TEST_DELAY = 100;

    const test$ = of(test).pipe(delay(TEST_DELAY));
    test$.subscribe(() => {
      test = true;
    });
    tick(TEST_DELAY);
    expect(test).toBeTrue();
  }));
});
