import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, TextInput, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Overview from './app/overview';

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
    // Search: { screen: Search },
    Overview: {screen: Overview},
});

AppRegistry.registerComponent('transportsearch', () => App);
