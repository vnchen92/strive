import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomeContainer from './splash/welcome_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProfilePage from './profile/profile_page';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ActivityShowContainer from './activity_show/activity_show_container';
//import ActivityForm from './activity_create/activity_form';
import CreatePostContainer from './activity_create/create_post_container';

const App = () => (
    <div>
        <WelcomeContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path='/dashboard' component={DashboardContainer} />
            <Route path='/activities/:id' component={ActivityShowContainer} />
            <Route path='/athletes/:id/posts/new' component={CreatePostContainer} />
            {/* <Route exact path={`/athletes/profilepage`} component={ProfilePage} /> */}
        </Switch>
    </div>
)

export default App;