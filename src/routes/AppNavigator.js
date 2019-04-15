import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FavoritesScreen, ExploreScreen, CategoriesScreen, CategoryScreen, RecipeDetailsScreen } from '../pages';

const TabNavigator = createBottomTabNavigator(
  {
    Categories: { screen: CategoriesScreen },
    Explore: { screen: ExploreScreen },
    Favorites: { screen: FavoritesScreen }
  },
  {
    initialRouteName: 'Explore',
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: { screen: TabNavigator },
    RecipeDetails: { screen: RecipeDetailsScreen },
    Category: { screen: CategoryScreen }
  },
  { headerMode: 'none' }
);

export default AppNavigator;
