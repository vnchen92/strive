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
        linkToRender = <Link to='/login'><button className='nav-bar-btn-login'>Log In</button></Link>
    } else if (currentPath === '/login') {
        linkToRender = <Link to='/signup'><button className='nav-bar-btn-signup'>Sign Up</button></Link>
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
                        <header className='header-container'>
                            <nav className='nav-bar'>
                                <div className='nav-bar-title-container'>
                                    <Link to='/'><h1 className='nav-bar-title'>STRIVE</h1></Link>
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
                    <>
                        <header className='header-container'>
                            <nav className='nav-bar'>
                                <div className='nav-bar-title-container'>
                                    <Link to='/'><h1 className='nav-bar-title'>STRIVE</h1></Link>
                                </div>
                                {linkToRender}
                            </nav>
                        </header>
                        <div className='homepage-container'>
                            <h2 className='homepage-header'>The #1 app for runners and cyclists</h2>
                            <div className='homepage-img-and-btn-container'>
                                <img className='homepage-img' alt="" srcset="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg 1x, https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header@2x-5e0be9810fb0366d567d4d53f19c61b4d7bf4275c5b13356456efc4b5e16fc67.jpg 2x" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg"></img>
                                {
                                currentPath === '/' ? (
                                    <div class='homepage-btn-container'>
                                        <DemoLogin login={login}/>
                                        <Link to='/signup'><button className='homepage-signup-btn'>Sign up with email</button></Link>
                                        <p className='homepage-small-text'>By signing up for Strive, you agree to the <span>Terms of Service</span>. View our <span>Private Policy</span>.</p>
                                        <p className='homepage-small-text'>Already a Member? <Link to='/login'>Log In</Link></p>
                                    </div>
                                ) : (
                                    <></>
                                )
                                }
                            </div>
                            <Switch>
                                <AuthRoute exact path="/login" component={LoginFormContainer} />
                                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                            </Switch>
                        </div>
                    </>
                )
                }
            </div>
        </header>
    )
}

export default withRouter(Welcome);