import { observable, computed, configure, action } from 'mobx';

configure({ enforceActions: 'always' });

class TestStore {
  @observable counter = 0;

  timer = null;

  @computed
  get value() {
    return this.counter;
  }

  @action
  incrementCounter() {
    this.counter += 1;
  }

  start() {
    this.timer = setInterval(() => {
      this.incrementCounter();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

export default TestStore;
