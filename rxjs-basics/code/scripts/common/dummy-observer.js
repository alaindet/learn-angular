export const getDummyObserver = (namespace) => ({
  next: val => console.log(`${namespace}:next`, val),
  error: error => console.log(`${namespace}:error`, error),
  complete: () => console.log(`${namespace}:complete`),
});
