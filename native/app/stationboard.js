//@flow
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, ListView, Text, TouchableHighlight} from 'react-native';
import api from 'api';

export default class Stationboard extends Component {
    static navigationOptions = {
        title: 'Stationboard',
    };

    constructor(props) {
        super(props);
        const { params } = props.navigation.state;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };

        api.getStationboard(params.location.id).then(result => {
            console.log('Stationboard', result)
            this.setState({dataSource: ds.cloneWithRows(result.stationboard)});
        })
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }

    renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return <TouchableHighlight>
            <View style={{height: '30px'}}>
                <Text>{rowData.name}</Text>
            </View>
        </TouchableHighlight>
    }
}