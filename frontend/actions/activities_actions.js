import * as ActivityApiUtil from '../util/activity_api_util';

export const RECEIVE_ALL_ACTIVITIES = 'RECEIVE_ALL_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVEACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVEACTIVITY';

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
        ActivityApiUtil.createActivity(activity).then(res => dispatch(receiveActivity(res)))
    )
}

export const updateActivity = activity => dispatch => {
    return (
        ActivityApiUtil.updateActivity(activity).then(res => dispatch(receiveActivity(res)))
    )
}

export const deleteActivity = activityId => dispatch => {
    return (
        ActivityApiUtil.deleteActivity(activityId).then(res => dispatch(removeActivity(res)))
    )
}