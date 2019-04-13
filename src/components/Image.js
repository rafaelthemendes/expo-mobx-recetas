import React from 'react';
import { Image } from 'react-native';
import ImageProgress from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';
import Colors from '../themes/Colors';

const DefaultImage = props => {
  const { source, resizeMode, ...otherProps } = props;
  return (
    <ImageProgress
      indicator={ProgressCircle}
      indicatorProps={{ size: 80, color: Colors.lightOrange }}
      renderError={() => (
        <Image source={require('../../assets/images/recipe-icon.png')} resizeMode="contain" {...otherProps} />
      )}
      {...props}
    />
  );
};

export default DefaultImage;
