# Notes

- A specification (a "spec") is a suite of unit tests
- describe() is a test suite, it() is a functional test
- Execute `ng test` to run all tests
  - `ng test` builds the application then listens to edits (watch mode)
- Jasmine testing framework has a lot of testing utils, like `expect()`, `pending()` to signal pending status of a test, `fail()` to mark tests as failed etc
- Without hot reload => `ng test --no-watch`

## Anatomy of a basic test

```js
// A test suite
describe('should add two numbers', () => {

  // A single functional test
  it('should add two numbers', () => {

    // Setup
    const logger = new LoggerService
    const calc = new CalculatorService(logger);

    // Execution
    const result = calc.add(2, 2);

    // Assertions
    expect(result).toBe(4);
  });
});
```

## Spies

- Jasmine provides a `spyOn()` utility that replaces a function or a method of an object with a proxy, so that you can spy on said method
- Information provided by the proxy method created by `spyOn()` include timing, counting calls etc.
