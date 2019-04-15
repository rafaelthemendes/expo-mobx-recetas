import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
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
  onPressCategory = category => {
    const { navigation } = this.props;
    navigation.navigate('Category', { category });
  };

  renderCategoriesList = () => {
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={categoriesList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.onPressCategory(item)}>
            <View style={styles.categoryRow}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

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

export default withNavigation(CategoriesScreen);
