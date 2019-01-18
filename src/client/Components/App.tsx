import * as React from 'react';
import '../scss/app';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Current from './Players';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Registration from './Registration';
import SinglePlayer from './SinglePlayer';
import Edit from './Edit';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Jumbotron />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/players' component={Current} />
                        <Route exact path='/register' component={Registration} />
                        <Route exact path='/player/:id' component={SinglePlayer} />
                        <Route exact path='/edit/:id' component={Edit} />
                    </Switch>
                </>
            </Router>
        )
    }
};