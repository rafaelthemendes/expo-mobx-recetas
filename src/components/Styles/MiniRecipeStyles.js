import { StyleSheet } from 'react-native';
import { Metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    marginRight: Metrics.smallSpace,
    justifyContent: 'center',
    height: 128,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: Metrics.borderRadius
  },
  recipeImage: {
    width: 208,
    height: 128
  }
});
