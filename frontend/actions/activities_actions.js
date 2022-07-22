import * as ActivityApiUtil from '../util/activity_api_util';

export const RECEIVE_ALL_ACTIVITIES = 'RECEIVE_ALL_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const RECEIVE_ACTIVITY_ERRORS = 'RECEIVE_ACTIVITY_ERRORS';
export const REMOVE_ACTIVITY_ERRORS = 'REMOVE_ACTIVITY_ERRORS';

const recieveAllActivities = activities => {
    return {
        type: RECEIVE_ALL_ACTIVITIES,
        activities
    }
}

const receiveActivity = activity => {
    return {
        type: RECEIVE_ACTIVITY,
        activity
    }
}

const removeActivity = activity => {
    return {
        type: REMOVE_ACTIVITY,
        activity
    }
}

const receiveActivityErrors = errors => {
    return {
        type: RECEIVE_ACTIVITY_ERRORS,
        errors
    }
}

export const removeActivityErrors = () => {
    return {
        type: REMOVE_ACTIVITY_ERRORS
    }
}

export const fetchAllActivities = () => dispatch => {
    return (
        ActivityApiUtil.fetchAllActivities().then(res => dispatch(recieveAllActivities(res)))
    )
}

export const fetchActivity = activityId => dispatch => {
    return (
        ActivityApiUtil.fetchActivity(activityId).then(res => dispatch(receiveActivity(res)))
    )
}

export const createActivity = activity => dispatch => {
    return (
        ActivityApiUtil.createActivity(activity)
            .then((res) => { 
                return dispatch(receiveActivity(res))
            },
            err => {
                return dispatch(receiveActivityErrors(err.responseJSON))
            }

    )
)}

export const updateActivity = activity => dispatch => {
    return (
        ActivityApiUtil.updateActivity(activity)
            .then((res) => {
                return dispatch(receiveActivity(res))
            },
            err => {
                return dispatch(receiveActivityErrors(err.responseJSON))
            }
    )
)}

export const deleteActivity = activityId => dispatch => {
    return (
        ActivityApiUtil.deleteActivity(activityId)
            .then(res => {
                return dispatch(removeActivity(res))
            })
    )
}