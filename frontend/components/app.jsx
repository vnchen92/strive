import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomeContainer from './splash/welcome_container';
import Dashboard from './dashboard/dashboard';

const App = () => (
    <div>
        <WelcomeContainer />
        <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
    </div>
)

export default App;