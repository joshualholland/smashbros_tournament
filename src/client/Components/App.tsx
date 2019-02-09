import * as React from 'react';
import '../scss/app';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Current from './Players';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Registration from './auth/Registration';
import SinglePlayer from './SinglePlayer';
import Edit from './auth/Edit';
import Stage from './Stage';
import Counterpicks from './Counterpicks';
import Login from './auth/login';
import Admin from './auth/admin';
import SMSform from './twilio/SMSform';
import Account from './auth/account';

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
                        <Route exact path='/edit' component={Edit} />
                        <Route exact path='/starter' component={Stage} />
                        <Route exact path='/counters' component={Counterpicks} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/sms' component={SMSform} />
                        <Route exact path='/account' component={Account} />
                    </Switch>
                </>
            </Router>
        )
    }
};