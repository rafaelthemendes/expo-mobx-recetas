import React from 'react';
import { Image } from 'react-native';
import ImageProgress from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';
import Colors from '../themes/Colors';

const ImageLoader = props => {
  const { source, resizeMode, style, ...otherProps } = props;
  const defaultSource = props.default || require('../../assets/images/recipe-icon.png');
  return (
    <ImageProgress
      indicator={ProgressCircle}
      indicatorProps={{ size: 80, color: Colors.lightOrange }}
      renderError={() => <Image source={defaultSource} resizeMode="contain" style={style} {...otherProps} />}
      {...props}
      style={[{ backgroundColor: Colors.lightGrey }, style]}
    />
  );
};

export default ImageLoader;
