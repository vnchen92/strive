import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors = []) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

// import { createAction } from '@reduxjs/toolkit';

// const receiveCurrentUser = createAction('RECEIVE_CURRENT_USER');
// const logoutCurrentUser = createAction('LOGOUT_CURRENT_USER');
// const receiveErrors = createAction('RECEIVE_ERRORS');

// export const signup = (user) => async (dispatch) => {
//     const userData = await SessionApiUtil.signup(user);
//     return dispatch(receiveCurrentUser(userData))
// }

// export const login = user => async dispatch => {
//     const userData = await SessionApiUtil.login(user);
//     return dispatch(receiveCurrentUser(userData))
// }

// export const logout = () => async dispatch => {
//     const response = await SessionApiUtil.logout();
//     if (response){
//         return dispatch(logoutCurrentUser())
//     }
// }

export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
  
export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);