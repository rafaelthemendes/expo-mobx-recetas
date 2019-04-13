import React from 'react';
import { View } from 'react-native';
import ImageFadeIn from './ImageFadeIn';
import styles from './Styles/RecipeRowStyles';

class RecipeRow extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageFadeIn style={{ flex: 1 }} resizeMode="cover" source={{ uri: data.photo }} />
        </View>
        <View style={styles.infoContainer} />
      </View>
    );
  }
}

export default RecipeRow;
