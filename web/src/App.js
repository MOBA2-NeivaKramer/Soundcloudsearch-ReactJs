import React, {Component} from "react";
import {browserHistory, Route, Router} from "react-router";
import "./App.css";
import Search from "./search";
import Overview from "./overview";

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Search}> </Route>
        <Route path='/overview/:name' component={Overview}></Route>
    </Router>
);

class App extends Component {

    render() {
        return (
            routes
        );
    }
}

export default App;
