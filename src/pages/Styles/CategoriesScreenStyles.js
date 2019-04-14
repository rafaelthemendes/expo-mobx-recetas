import { StyleSheet } from 'react-native';
import { AppStyles, Metrics, Fonts, Colors } from '../../themes';

export default StyleSheet.create({
  ...AppStyles.screen,
  container: {
    flex: 1,
    margin: Metrics.smallSpace
  },
  categoryRow: {
    backgroundColor: Colors.whiteFull,
    height: Metrics.buttonSize,
    marginBottom: Metrics.tinySpace,
    borderRadius: Metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    ...Fonts.style.h3
  }
});
