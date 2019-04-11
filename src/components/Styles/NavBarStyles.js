import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  wrapper: {
    height: Metrics.navBarHeight + Metrics.statusBarHeight,
    backgroundColor: Colors.lightOrange,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: Metrics.statusBarHeight
  },
  alternate: {
    color: Colors.whiteFull
  },
  title: {
    ...Fonts.style.recipeNameCard,
    fontWeight: 'bold',
    color: Colors.black
  },
  leftContainer: {
    width: Metrics.buttonSize,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightContainer: {
    width: Metrics.buttonSize,
    height: Metrics.buttonSize,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favorite: {
    color: Colors.redFull
  },
  leftButtonIcon: {
    fontSize: 25
  },
  rightButtonIcon: {
    fontSize: 15
  }
});
