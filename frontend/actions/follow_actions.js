import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';

const receiveAllFollows = follows => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows
    }
}

export const fetchAllFollows = () => dispatch => {
    return (
        FollowApiUtil.fetchAllFollows().then(res => dispatch(receiveAllFollows(res)))
    )
}