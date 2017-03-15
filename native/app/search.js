import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, TextInput, Button} from 'react-native';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, width: 200}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button title="Search"/>
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