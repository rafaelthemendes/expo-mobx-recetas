import React from 'react';
import { View, FlatList } from 'react-native';
import NavBar from '../components/NavBar';
import RecipeRow from '../components/RecipeRow';
import styles from './Styles/ExploreScreenStyles';

const recipeData = [
  {
    id: '52920',
    name: 'Escovitch Fish',
    categoryName: 'Fish',
    duration: '10',
    complexity: 'Hard',
    people: 3,
    photo: 'http://www.themealdb.com/images/media/meals/1520084413a.jpg'
  },
  {
    id: '52930',
    name: 'Escovitch Fish',
    categoryName: 'Fish',
    duration: '10',
    complexity: 'Hard',
    people: 3,
    photo: 'http://www.themealdb.com/images/media/meals/1520084413.jpg'
  },
  {
    id: '52940',
    name: 'Escovitch Fish',
    categoryName: 'Fish',
    duration: '10',
    complexity: 'Hard',
    people: 3,
    photo: 'http://www.themealdb.com/images/media/meals/1520084413a.jpg'
  },
  {
    id: '52950',
    name: 'Escovitch Fish',
    categoryName: 'Fish',
    duration: '10',
    complexity: 'Hard',
    people: 3,
    photo: 'http://www.themealdb.com/images/media/meals/1520084413.jpg'
  }
];

class ExploreScreen extends React.Component {
  renderRecipeList() {
    return (
      <FlatList keyExtractor={item => item.id} data={recipeData} renderItem={({ item }) => <RecipeRow data={item} />} />
    );
  }
  render() {
    return (
      <View style={[styles.mainScreen]}>
        <NavBar title="Explore" />
        <View style={styles.container}>{this.renderRecipeList()}</View>
      </View>
    );
  }
}

export default ExploreScreen;
