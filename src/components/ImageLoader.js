import React from 'react';
import { Image } from 'react-native';
import ImageProgress from 'react-native-image-progress';
import ProgressCircle from 'react-native-progress/Circle';
import Colors from '../themes/Colors';

const ImageLoader = props => {
  const { source, resizeMode, ...otherProps } = props;
  const defaultSource = this.props.default || require('../../assets/images/recipe-icon.png');
  return (
    <ImageProgress
      indicator={ProgressCircle}
      indicatorProps={{ size: 80, color: Colors.lightOrange }}
      renderError={() => <Image source={defaultSource} resizeMode="contain" {...otherProps} />}
      {...props}
    />
  );
};

export default ImageLoader;
