import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, TextInput, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Overview from './app/overview';
import Stationboard from './app/stationboard'

export default class Transportsearch extends Component {
    static navigationOptions = {
        title: 'Transportsearch',
    };

    constructor() {
        super();
        this.state = {text: ""};
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, width: 200}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button title="Search"
                        onPress={() => navigate('Overview', {location: this.state.text})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

const App = StackNavigator({
    Home: {screen: Transportsearch},
    Overview: {screen: Overview},
    Stationboard: {screen: Stationboard}
});

AppRegistry.registerComponent('transportsearch', () => App);
