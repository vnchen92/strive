import React from 'react';
import { Link, useHistory, useNavigate, withRouter, Switch, Route } from 'react-router-dom';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import DemoLogin from '../demo_login/demo_login';
import { AuthRoute } from '../../util/route_util';

const Welcome = ({currentUser, logout, login, location}) => {
    const currentPath = location.pathname;
    let linkToRender;
    if (currentPath === '/' || currentPath === '/signup') {
        linkToRender = <Link to='/login'><h1>LoginButton</h1></Link>
    } else if (currentPath === '/login') {
        linkToRender = <Link to='/signup'><h1>SignUpButton</h1></Link>
    }

    const history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        logout();
        history.push('/');
    }
    
    return (
        <header>
            <div>
                {
                currentUser ? (
                    // PLACEHOLDER FOR DASHBOARD
                    <div>
                        <nav className='nav-bar'>
                            <Link to='/'><h1>Strive</h1></Link>
                            <p>Hello, {currentUser.name}</p>
                            <button onClick={handleClick}>Log Out</button>
                        </nav>
                    </div>
                    // PLACEHOLDER FOR DASHBOARD
                ) : (
                    <div>
                        <nav className='nav-bar'>
                            <Link to='/'><h1>Strive</h1></Link>
                            {linkToRender}
                        </nav>
                        {
                            currentPath === '/' ? (
                                <div>
                                    <Link to='/signup'>Sign Up with email</Link>
                                    <DemoLogin login={login}/>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                        <Switch>
                            <AuthRoute exact path="/login" component={LoginFormContainer} />
                            <AuthRoute exact path="/signup" component={SignupFormContainer} />
                        </Switch>
                    </div>
                )
                }
            </div>
        </header>
    )
}

export default withRouter(Welcome);