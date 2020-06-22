export class Store {

  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  dispatch(action: any) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  subscribe(subscriber) {
    this.subscribers = [...this.subscribers, subscriber];
    this.notify();
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    };
  }

  private notify() {
    for (const subscriber of this.subscribers) {
      subscriber(this.value);
    }
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
