import { StyleSheet } from 'react-native';

import { Metrics, AppStyles, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  ...AppStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.smallSpace,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: Colors.mainBackground
  },
  title: {
    ...Fonts.family.recipeNameCard,
    fontWeight: 'bold'
  }
});
