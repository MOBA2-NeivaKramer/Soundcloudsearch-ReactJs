import React, {Component} from "react";
import api from 'api';
import Moment from 'moment';

export default class Stationboard extends Component {

    constructor(props) {
        super(props);
        this.getStationboard();
        this.state = { stationboard: [] };
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
                <h1>Station Board</h1>
                <StationboardTable stationboard={this.state.stationboard}/>
            </div>
        );
    }

}

function StationboardTable({ stationboard }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Departure</th>
                    <th>Name</th>
                    <th>Destination</th>
                </tr>
            </thead>
            <tbody>
                {stationboard.map((departure, i) =>
                    <tr key={i}>
                        <td>{Moment(departure.stop.departure).fromNow()}</td>
                        <td>{departure.name}</td>
                        <td>{departure.to}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
