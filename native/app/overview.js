import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ListView} from 'react-native';
import api from 'api';

export default class Overview extends Component {
    constructor(proprs) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };

        api.findLocation('winterthur').then(result => {
            this.setState({dataSource: result.stations});
            console.log("Var: ", this.state.locations);
        });
    }

    render() {
        <ListView dataSource={this.state.dataSource} />
    }
}