import React from 'react';
import { View, FlatList, Text } from 'react-native';
import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
import styles from './Styles/CategoriesScreenStyles';

const categoriesList = [
  {
    id: '1234',
    name: 'APERITIVO'
  },
  {
    id: '5678',
    name: 'DESAYUNO Y BRUNCH'
  },
  {
    id: '9012',
    name: 'POSTRE'
  },
  {
    id: '3456',
    name: 'BEBIDAS'
  }
];
class CategoriesScreen extends React.Component {
  renderCategoriesList() {
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={categoriesList}
        renderItem={({ item }) => (
          <View style={styles.categoryRow}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />
    );
  }

  render() {
    return (
      <View style={styles.mainScreen}>
        <NavBar title="Categorias" />
        <View style={styles.container}>{this.renderCategoriesList()}</View>
        <TabBar selected="categories" />
      </View>
    );
  }
}

export default CategoriesScreen;
