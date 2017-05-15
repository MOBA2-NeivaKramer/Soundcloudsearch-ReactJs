//@flow
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, ListView, Text, TouchableHighlight} from 'react-native';
import api from 'api';
import Moment from 'moment';

export default class Stationboard extends Component {
    static navigationOptions = {
        title: 'Stationboard',
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        api.getStationboard(params.location.id)
            .then(result => {
                console.log('Stationboard', result)
                Stationboard.navigationOptions.title = result.station.name + 'Stationboard';
                this.setState({dataSource: this.state.dataSource.cloneWithRows(result.stationboard)});
            })
            .catch(error => {
                throw error
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
            <View style={{padding: 10}}>
                <Text style={{color: 'black'}}>{Moment(rowData.stop.departure).fromNow()}</Text>
                <Text>{rowData.name + ' to ' + rowData.to}</Text>
            </View>
        </TouchableHighlight>
    }
}