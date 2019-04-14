import React from 'react';
import { Text, View, Image, ScrollView, StatusBar } from 'react-native';
import NavBar from '../components/NavBar';
import Icon from '../components/Icon';
import ImageFadeIn from '../components/ImageFadeIn';
import styles from './Styles/RecipeDetailsScreenStyles';

class RecipeDetails extends React.Component {
  state = {
    favorite: false
  };

  onPressFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };

  renderImage = data => {
    return (
      <View style={styles.imageContainer}>
        <ImageFadeIn source={{ uri: data.photo || 'default' }} style={styles.recipeImage} />
        <View style={styles.darkener} />
      </View>
    );
  };

  renderInfo = data => {
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
  };

  renderIngredients = data => {
    if (data.ingredients) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Ingredientes</Text>
          <Text style={styles.description}>{data.ingredients}</Text>
        </View>
      );
    }
  };

  renderInstructions = data => {
    if (data.description) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Preparacion</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      );
    }
  };

  renderContent(data) {
    return (
      <ScrollView>
        {this.renderImage(data)}
        {this.renderInfo(data)}
        {this.renderIngredients(data)}
        {this.renderInstructions(data)}
      </ScrollView>
    );
  }

  render() {
    const recipe = this.props.navigation.getParam('recipe', {});
    return (
      <View style={styles.mainScreen}>
        <NavBar
          transparent
          backButton
          rightButton
          favorite={this.state.favorite}
          onPressFavorite={this.onPressFavorite}
        />
        <View style={styles.container}>{this.renderContent(recipe)}</View>
      </View>
    );
  }
}

export default RecipeDetails;
