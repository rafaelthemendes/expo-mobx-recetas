import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  header: {
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
    ...Fonts.style.h3,
    color: Colors.black,
    textAlign: 'left'
  },
  scroller: {
    paddingLeft: Metrics.smallSpace
  }
});
