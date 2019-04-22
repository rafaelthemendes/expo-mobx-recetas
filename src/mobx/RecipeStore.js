import { observable, computed, configure, action } from 'mobx';

configure({ enforceActions: 'always' });

// FAKE DATA
const fakeCategories = [];

class RecipeStore {
  @observable loading = false;

  @observable categories = [];

  @observable recipes = {
    recommended: [],
    recent: []
  };

  @observable favorites = [];

  @action
  getCategories() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.categories = fakeCategories;
    }, 2000);
  }

  // OLD
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

export default RecipeStore;
