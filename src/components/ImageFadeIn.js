import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { Colors } from '../themes';

class ImageFadeIn extends Component {
  state = {
    opacity: new Animated.Value(0),
    source: this.props.source,
    loadError: false
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
  };

  onError = () => {
    const source = this.props.default || require('../../assets/images/recipe-icon.png');
    this.setState({ source, loadError: true });
  };

  render() {
    const { source, resizeMode, style, ...otherProps } = this.props;
    return (
      <View style={[{ backgroundColor: Colors.lightGrey }, style]}>
        <Animated.Image
          onLoad={this.onLoad}
          onError={this.onError}
          source={this.state.source}
          resizeMode={this.state.loadError ? 'contain' : resizeMode}
          {...otherProps}
          style={[
            {
              opacity: this.state.opacity
            },
            this.state.loadError ? { width: '100%' } : {},
            this.props.style
          ]}
        />
      </View>
    );
  }
}

export default ImageFadeIn;
