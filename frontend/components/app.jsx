import React from 'react';
import WelcomeContainer from './splash/welcome_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1>Strive</h1>
        <WelcomeContainer />

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;