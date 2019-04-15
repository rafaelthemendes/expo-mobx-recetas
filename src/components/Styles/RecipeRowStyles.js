import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.smallSpace,
    marginBottom: Metrics.baseSpace,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  imageContainer: {
    height: 128,
    borderTopLeftRadius: Metrics.borderRadius,
    borderTopRightRadius: Metrics.borderRadius,
    overflow: 'hidden'
  },
  infoContainer: {
    height: 80,
    paddingVertical: Metrics.smallSpace,
    paddingHorizontal: Metrics.baseSpace,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Colors.whiteFull,
    borderBottomLeftRadius: Metrics.borderRadius,
    borderBottomRightRadius: Metrics.borderRadius
  },
  recipeImage: {
    flex: 1
  },
  properties: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  cell: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: Metrics.smallSpace,
    flexDirection: 'row'
  },
  cellIcon: {
    fontSize: Metrics.icons.small,
    color: Colors.mediumGrey,
    marginRight: Metrics.smallSpace
  },
  cellText: {
    fontFamily: Fonts.family.base,
    fontSize: 13,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: Colors.mediumGrey
  },
  title: {
    fontFamily: Fonts.family.base,
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: Colors.black
  },
  category: {
    fontFamily: Fonts.family.base,
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.darkGrey,
    textAlign: 'left'
  }
});
