import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Search from './app/search';
// import Overview from './app/overview';

export default class Transportsearch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search navigation={this.props.navigation}/>
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

const App = StackNavigator({
    Home: { screen: Transportsearch },
    Search: { screen: Search },
    // Overview: { screen: Overview },
});

AppRegistry.registerComponent('transportsearch', () => App);
