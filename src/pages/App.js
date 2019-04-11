import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from '../components/NavBar';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NavBar title="Titulo" />
      </View>
    );
  }
}
