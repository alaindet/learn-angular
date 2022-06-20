# Quick commands

## Run all tests

```bash
ng test
```

## Run all expect one test or test suite (by editing code)

- **x** stands for **exclude**

```typescript
// In a specific .spec.ts file
// describe(...)
xdescribe(...)
```

or

```typescript
// In a specific .spec.ts file
// it(...)
xit(...)
```

```bash
ng test
```

## Run just one test or test suite (by editing code)

- **f** stands for **focus**

```typescript
// In a specific .spec.ts file
// describe(...)
fdescribe(...)
```

or

```typescript
// In a specific .spec.ts file
// it(...)
fit(...)
```

```bash
ng test
```

## Run all without reload

```bash
ng test --watch=false
```

## Run code coverage report

```bash
ng test --watch=false --code-coverage
http-server -c-1 ./coverage # Visit localhost:8080
```

This creates a `/coverage` folder containing a code coverage report in HTML
