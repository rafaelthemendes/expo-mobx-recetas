import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
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

  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.leftContainer}>{this.backButton()}</View>
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

export default NavBar;
