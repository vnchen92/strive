import React from 'react';
import { Link, useHistory, withRouter, Switch } from 'react-router-dom';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import DemoLogin from '../demo_login/demo_login';
import { AuthRoute } from '../../util/route_util';

const Welcome = ({currentUser, logout, login, location}) => {
    const currentPath = location.pathname;

    let linkToRender;

    if (currentPath === '/' || currentPath === '/signup') {
        linkToRender = <Link to='/login'><button className='nav-bar-btn'>LoginButton</button></Link>
    } else if (currentPath === '/login') {
        linkToRender = <Link to='/signup'><button className='nav-bar-btn'>SignUpButton</button></Link>
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
                    <>
                        <header class='header-container'>
                            <nav className='nav-bar'>
                                <div className='nav-bar-title-container'>
                                    <Link to='/'><h1 className='nav-bar-title'>Strive</h1></Link>
                                </div>
                                <p>Hello, {currentUser.name}</p>
                                <div>
                                    <button className='nav-bar-btn' onClick={handleClick}>Log Out</button>
                                </div>
                            </nav>
                        </header>
                    </>
                    // PLACEHOLDER FOR DASHBOARD
                ) : (
                    <div>
                        <header class='header-container'>
                            <nav className='nav-bar'>
                                <div className='nav-bar-title-container'>
                                    <Link to='/'><h1 className='nav-bar-title'>Strive</h1></Link>
                                </div>
                                <div className='nav-bar-btn-container'>
                                    {linkToRender}
                                </div>
                            </nav>
                        </header>
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