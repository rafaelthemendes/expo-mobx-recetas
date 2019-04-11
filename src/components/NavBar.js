import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/NavBarStyles';

class NavBar extends React.Component {
  render() {
    const { style, textStyle, title } = this.props;
    return (
      <View style={[styles.navBar, style]}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </View>
    );
  }
}

export default NavBar;
