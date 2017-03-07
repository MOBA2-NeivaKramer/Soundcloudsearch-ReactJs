import React, {Component} from "react";
import api from 'api';

export default class Stationboard extends Component {

    constructor(props) {
        super(props);
        this.getStationboard();
        this.state = { stationboard: {} };
    }

    getStationboard() {
        api.getStationboard(this.props.params.locationId).then(result => {
            console.log(result);
            this.setState({stationboard: result.stationboard});
        });
    }

    render() {
        return (
            <div>
                <h1>STATION BOARD</h1>
                {JSON.stringify(this.state.stationboard)}
            </div>
        );
    }

}