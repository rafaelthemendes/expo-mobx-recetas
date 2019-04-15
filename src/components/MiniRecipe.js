import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ImageLoading from './ImageLoading';
import styles from './Styles/MiniRecipeStyles';

import { withNavigation } from 'react-navigation';

class MiniRecipe extends React.PureComponent {
  onPress = () => {
    const { navigation, data } = this.props;
    navigation.navigate('RecipeDetails', { recipe: data });
  };

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <ImageLoading source={{ uri: data.photo || 'default' }} style={styles.recipeImage} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(MiniRecipe);
