import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.tabBarHeight,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: Colors.whiteFull
  },
  tab: {
    flex: 1,
    height: Metrics.tabBarHeight,
    padding: Metrics.smallSpace,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabIcon: {
    fontSize: Metrics.icons.tab,
    color: Colors.mediumGrey
  },
  tabLine: {
    position: 'absolute',
    bottom: 0,
    left: Metrics.baseSpace,
    right: Metrics.baseSpace,
    height: 4,
    backgroundColor: Colors.lightOrange
  },
  selectedIcon: {
    color: Colors.lightOrange
  }
});
