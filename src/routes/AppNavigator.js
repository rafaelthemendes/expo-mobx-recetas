import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { GenericScreen, ExploreScreen, CategoriesScreen } from '../pages';

const TabNavigator = createBottomTabNavigator(
  {
    Categories: { screen: CategoriesScreen },
    Explore: { screen: ExploreScreen },
    Favorites: { screen: GenericScreen }
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
    Home: { screen: TabNavigator }
  },
  { headerMode: 'none' }
);

export default AppNavigator;
