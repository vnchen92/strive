import React from 'react';
import WelcomeContainer from './splash/welcome_container';
import { Route, Switch} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <nav>
            <WelcomeContainer />
        </nav>
        {/* <Switch>
            <Route exact path='/' component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch> */}
    </div>
)

export default App;