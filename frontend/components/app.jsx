import React from 'react';
import { Switch } from 'react-router-dom';
import WelcomeContainer from './splash/welcome_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ActivityShowContainer from './activities/activity_show/activity_show_container';
import CreatePostContainer from './activities/activity_create/create_post_container';
import EditPostContainer from './activities/activity_create/edit_post_container';
import HeaderContainer from './splash/header_container';

const App = props => {
    return(
        <div>
            <HeaderContainer />
            <Switch>
                <AuthRoute exact path='/' component={WelcomeContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/dashboard/my_activities' component={DashboardContainer} />
                <ProtectedRoute exact path='/actitivies/:id/edit' component={EditPostContainer} />
                <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
                <ProtectedRoute exact path='/athletes/:id/posts/new' component={CreatePostContainer} />
                <ProtectedRoute path='/activities/:id' component={ActivityShowContainer} />
            </Switch>
        </div>
    )
}

export default App;