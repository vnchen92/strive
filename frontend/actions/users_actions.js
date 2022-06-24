import * as UserApiUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

export const fetchAllUsers = () => dispatch => {
    return (
        UserApiUtil.fetchAllUsers().then(res => dispatch(receiveAllUsers(res)))
    )
}