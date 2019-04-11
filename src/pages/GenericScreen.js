import React from 'react';
import { View } from 'react-native';
import NavBar from '../components/NavBar';

class GenericScreen extends React.Component {
  state = {
    favorite: false
  };

  onPressFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };

  render() {
    return (
      <View>
        <NavBar
          title="Titulo"
          backButton
          rightButton
          favorite={this.state.favorite}
          onPressFavorite={this.onPressFavorite}
        />
      </View>
    );
  }
}

export default GenericScreen;
