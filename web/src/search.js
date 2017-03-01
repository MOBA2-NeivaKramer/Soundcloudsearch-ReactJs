import React, {Component} from "react";
import {browserHistory} from "react-router";


var containerStyle = {
    'display': 'flex',
    'height': '100vh'
};

var containerItemStyle = {
    'display': 'flex',
    'flexGrow': '1',
    'alignSelf': 'center',
    'justifyContent': 'center'
};

export default class Search extends Component {

    constructor() {
        super();
        this.state = {searchvalue: ''};

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSearch() {
        browserHistory.push('/overview/' + this.state.searchvalue);
    }

    handleInputChange(event) {
        this.setState({searchvalue: event.target.value});
    }

    render() {
        return (
            <div style={containerStyle}>
                <div style={containerItemStyle}>
                    <input placeholder="location" onChange={this.handleInputChange}></input>
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        );
    }
}

