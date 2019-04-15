import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './Styles/FeaturedRecipesBoxStyles';

import MiniRecipe from './MiniRecipe';

class RecommendationBox extends React.Component {
  renderScroll = () => {
    const { data } = this.props;
    return (
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroller}
      >
        {data.map(item => {
          return <MiniRecipe key={item.id} data={item} />;
        })}
      </ScrollView>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Platos Recomendados</Text>
        {this.renderScroll()}
        <Text style={[styles.header, { marginTop: 20 }]}>Ultimos Platos</Text>
      </View>
    );
  }
}

export default RecommendationBox;
