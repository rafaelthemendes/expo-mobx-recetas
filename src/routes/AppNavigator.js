import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { GenericScreen } from '../pages';
import ExploreScreen from '../pages/ExploreScreen';

const TabNavigator = createBottomTabNavigator({
  Explore: { screen: ExploreScreen },
  Categories: { screen: GenericScreen },
  Favorites: { screen: GenericScreen }
});

const AppNavigator = createStackNavigator(
  {
    Home: { screen: TabNavigator }
  },
  { headerMode: 'none' }
);

export default AppNavigator;
