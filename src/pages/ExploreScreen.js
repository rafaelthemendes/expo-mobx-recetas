import React from 'react';
import { View } from 'react-native';
import { NavBar, RecipeRow } from '../components';

class ExploreScreen extends React.Component {
  render() {
    return (
      <View>
        <NavBar title="Explore" />
        <RecipeRow />
      </View>
    );
  }
}

export default ExploreScreen;
