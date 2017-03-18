import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, ListView, Text} from 'react-native';
import api from 'api';

export default class Overview extends Component {
    static navigationOptions = {
        title: 'Overview',
    };

    constructor(props) {
        super(props);
        const { params } = props.navigation.state;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };

        api.findLocation(params.location).then(result => {
            this.setState({dataSource: ds.cloneWithRows(result.stations)});
        });
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData) => <Text>{rowData.name}</Text>}
                />
            </View>
        )
    }
}