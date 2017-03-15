import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Search from './app/search';

export default class transportsearch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

AppRegistry.registerComponent('transportsearch', () => transportsearch);
