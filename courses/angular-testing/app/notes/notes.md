# Notes

- A specification (a "spec") is a suite of unit tests
- describe() is a test suite, it() is a functional test
- Execute `ng test` to run all tests
  - `ng test` builds the application then listens to edits (watch mode)
- Jasmine testing framework has a lot of testing utils, like `expect()`, `pending()` to signal pending status of a test, `fail()` to mark tests as failed etc
- Without hot reload => `ng test --no-watch`
- Max async time is 5 seconds for Jasmine

## Anatomy of a basic test

```js
// A test suite
describe('should add two numbers', () => {

  // A single functional test
  // The 3 As rule applies here
  it('should add two numbers', () => {

    // 1. Arrange
    const logger = new LoggerService
    const calc = new CalculatorService(logger);

    // 2. Act
    const result = calc.add(2, 2);

    // 3. Assert
    expect(result).toBe(4);
  });
});
```

## Spies

- Jasmine provides a `spyOn()` utility that replaces a function or a method of an object with a proxy, so that you can spy on said method
- Information provided by the proxy method created by `spyOn()` include timing, counting calls etc.

## Jasmine Utilities

- `fdescribe`/`fit`: creates a whitelist so that only tests with `fdescribe`/`fit` are executed
- You can mark entire test suites with `fdescribe` or just single tests with `fit`
- `xdescribe`/`xit`: creates a blacklist so that tests marked as `xdescribe`/`xit` are excluded from the executed tests
- You can mark entire test suites with `xdescribe` or just single tests with `xit`

## Async operations

- Most async operations can be tested with a **zone**
- Async tests should be wrapped in the `fakeAsync()` test utility coming from `@angular/core/testing`
- `fakeAsync()` waits for all timers in the unit test and fails if any timer is still pending in the queue
- `fakeAsync()` simulates the passage of time with `tick()` util in order to trigger timers
- `tick()` is only usable inside `fakeAsync()`
- Promises are **microtasks** and have priority over other timers (ex.: setTimeout) which are considered **macrotasks** or simply **tasks**
- **microtasks have their own queue** and they do not cause Angular to re-render
- The util `flushMicrotasks()` flushes all promises
- The util `flush()` flushes all timers, but does not work with Observables, use `tick()` instead
