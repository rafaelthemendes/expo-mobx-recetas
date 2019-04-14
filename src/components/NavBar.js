import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Styles/NavBarStyles';
import Icon from './Icon';

class NavBar extends React.Component {
  backButton = () => {
    const { backButton } = this.props;
    if (backButton) {
      return <Icon name="left" style={[styles.leftButtonIcon, styles.alternate]} />;
    }
  };

  rightButton = () => {
    const { rightButton, favorite } = this.props;
    if (rightButton) {
      const style = favorite ? styles.favorite : {};
      return <Icon name="favorites" style={[styles.rightButtonIcon, styles.alternate, style]} />;
    }
  };

  onBackPress = () => {
    const { onBackPress, navigation } = this.props;
    // Used to override the back button behavior
    if (onBackPress) {
      return onBackPress();
    }
    navigation.goBack();
  };

  render() {
    const { title, transparent } = this.props;
    return (
      <View style={[styles.wrapper, transparent ? styles.transparent : null]}>
        <TouchableOpacity onPress={this.onBackPress}>
          <View style={styles.leftContainer}>{this.backButton()}</View>
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, styles.alternate]}>{title}</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onPressFavorite}>
          <View style={styles.rightContainer}>{this.rightButton()}</View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default withNavigation(NavBar);
