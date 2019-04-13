import React from 'react';
import { View } from 'react-native';
import NavBar from '../components/NavBar';
import RecipeRow from '../components/RecipeRow';

const recipeData = {
  id: 52944,
  photo: 'http://www.themealdb.com/images/media/meals/1520084413.jpg'
};

class ExploreScreen extends React.Component {
  render() {
    return (
      <View>
        <NavBar title="Explore" />
        <View style={{ flex: 1, margin: 10 }}>
          <RecipeRow data={recipeData} />
        </View>
      </View>
    );
  }
}

export default ExploreScreen;
