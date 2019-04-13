import React from 'react';
import { View } from 'react-native';
import Image from './Image';
import styles from './Styles/RecipeRowStyles';

class RecipeRow extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={{ flex: 1 }} resizeMode="cover" source={{ uri: data.photo }} />
        </View>
        <View style={styles.infoContainer} />
      </View>
    );
  }
}

export default RecipeRow;
