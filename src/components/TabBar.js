import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Styles/TabBarStyles';
import Icon from './Icon';

class TabBar extends React.Component {
  navigate = route => {
    const { navigation } = this.props;
    switch (route) {
      case 'explore':
        return navigation.navigate({ routeName: 'Explore' });
      case 'categories':
        return navigation.navigate({ routeName: 'Categories' });
      case 'favorites':
        return navigation.navigate({ routeName: 'Favorites' });
    }
  };

  renderTab(route, iconName) {
    const isSelected = this.props.selected === route;
    return (
      <TouchableOpacity style={styles.tab} onPress={() => this.navigate(route)}>
        <Icon name={iconName} style={[styles.tabIcon, isSelected ? styles.selectedIcon : null]} />
        {isSelected && <View style={styles.tabLine} />}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTab('categories', 'recipes')}
        {this.renderTab('explore', 'home')}
        {this.renderTab('favorites', 'favorites')}
      </View>
    );
  }
}

export default withNavigation(TabBar);
