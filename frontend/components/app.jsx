import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomeContainer from './splash/welcome_container';
import Dashboard from './dashboard/dashboard';
import ProfilePage from './profile/profile_page';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <WelcomeContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path={`/athletes/profilepage`} component={ProfilePage} />
        </Switch>
    </div>
)

export default App;