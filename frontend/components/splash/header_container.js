import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentPath: ownProps.location.pathname,
        history: ownProps.history,
        renderLogin: <Link to='/login'><button className='nav-bar-btn-login'>Log In</button></Link>,
        renderSignup: <Link to='/signup'><button className='nav-bar-btn-signup'>Sign Up</button></Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
