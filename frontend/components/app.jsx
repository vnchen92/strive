import React from 'react';
import WelcomeContainer from './splash/welcome_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';

const App = () => (
    <div>
        <h1>Strive</h1>
        <WelcomeContainer />

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;