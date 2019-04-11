import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  navBar: {
    height: Metrics.navBarHeight + Metrics.statusBarHeight,
    backgroundColor: Colors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...Fonts.style.recipeNameCard,
    fontWeight: 'bold',
    marginTop: Metrics.statusBarHeight
  }
});
