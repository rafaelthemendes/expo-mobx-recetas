import { StyleSheet } from 'react-native';

import { Metrics, AppStyles, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  ...AppStyles.screen,
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: Colors.mainBackground
  },
  navBar: {
    marginTop: Metrics.statusBarHeight,
    height: Metrics.navBarHeight,
    backgroundColor: Colors.whiteFull,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...Fonts.family.recipeNameCard,
    fontWeight: 'bold'
  }
});
