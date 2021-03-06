import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImageLoading from './ImageLoading';
import Icon from './Icon';
import styles from './Styles/RecipeRowStyles';

class RecipeRow extends React.Component {
  renderInfoContainer(data) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{data.categoryName}</Text>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.properties}>
          <View style={styles.cell}>
            <Icon name="duration" style={styles.cellIcon} />
            <Text style={styles.cellText}>{data.duration} Minutos</Text>
          </View>
          <View style={styles.cell}>
            <Icon name="difficulty" style={styles.cellIcon} />
            <Text style={styles.cellText}>{data.complexity}</Text>
          </View>
          <View style={styles.cell}>
            <Icon name="recipes" style={styles.cellIcon} />
            <Text style={styles.cellText}>{data.people} Personas</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { data, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
        <View style={styles.imageContainer}>
          <ImageLoading style={styles.recipeImage} resizeMode="cover" source={{ uri: data.photo || 'default' }} />
        </View>
        {this.renderInfoContainer(data)}
      </TouchableOpacity>
    );
  }
}

export default RecipeRow;
