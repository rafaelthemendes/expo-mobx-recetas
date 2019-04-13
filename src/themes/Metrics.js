import { Dimensions, Platform } from 'react-native';

function isIphoneXorAbove() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
  );
}

export default {
  statusBarHeight: isIphoneXorAbove() ? 40 : 20,
  navBarHeight: 56,
  tabBarHeight: 56,
  buttonSize: 60,
  baseSpace: 16,
  smallSpace: 8,
  buttonRadius: 24,
  borderRadius: 4,
  icons: {
    tiny: 15,
    small: 15,
    medium: 20,
    tab: 20,
    large: 45,
    xl: 50
  }
};
