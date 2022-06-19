import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { AuthRoute } from '../../util/route_util';


const Welcome = ({currentUser, logout}) => {
    const display = currentUser ? (
        <nav className='nav-bar'>
            <h1><Link to='/'>Strive</Link></h1>
            <p>Hello, {currentUser.name}</p>
            <button onClick={logout}>Log Out</button>
        </nav>
    ) : (
        <div>
            <nav className='nav-bar'>
                <h1><Link to='/'>Strive</Link></h1>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch> 
        </div>
    )
    
    return (
        <header>
            <div>
                {display}
            </div>
        </header>
    )
}

export default Welcome;