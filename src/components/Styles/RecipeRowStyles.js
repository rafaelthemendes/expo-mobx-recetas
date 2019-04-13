import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes';

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.baseSpace,
    marginBottom: Metrics.baseSpace,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: Colors.whiteFull
  },
  imageContainer: {
    height: 128,
    backgroundColor: 'green'
  },
  infoContainer: {
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrics.smallSpace,
    paddingHorizontal: Metrics.smallSpace,
    backgroundColor: 'red'
  }
});
