import { fakeAsync, flush, tick } from '@angular/core/testing';

describe('Async Testing Examples', () => {

  // Basic way for one async operation only
  it('With Jasmine done()', (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 100);
  });

  it('With tick()', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
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
    expect(test).toBeTruthy();
  }));
});
