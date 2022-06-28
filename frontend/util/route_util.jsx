import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

const Auth = ({loggedIn, path, component: Component}) => {
  return (
    <Route 
      path={path} 
      render={(props) => (
        loggedIn ? <Redirect to='/dashboard' /> : <Component {...props} />
      )} 
    />
  )
}

const Protected = ({ loggedIn, path, component: Component}) => {
  return (
    <Route 
      path={path} 
      render={(props) => (
        loggedIn ? <Component {...props} /> : <Redirect to='/login' />
      )} 
    />
  )
}

const mapStateToProps = (state) => {
  return { 
    loggedIn: Boolean(state.session.id) 
  }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));