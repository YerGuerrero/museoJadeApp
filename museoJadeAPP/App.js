/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import FetchLocation from './components/FetchLocation.js';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  getUserLocationHandler = () => {
    console.log('Se presiona el botón');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hola esta vara funciona</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
