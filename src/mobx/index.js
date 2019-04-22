import TestStore from './TestStore';
import RecipeStore from './RecipeStore';

export default {
  test: new TestStore(),
  recipe: new RecipeStore()
};
