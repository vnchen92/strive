export const fetchAllActivities = () => {
    return $.ajax({
        url: 'api/activities',
        method: 'GET'
    })
}

export const fetchActivity = activityId => {
    return $.ajax({
        url: `api/activities/${activityId}`,
        method: 'GET',
        data: {activityId}
    })
}

export const createActivity = activity => {
    debugger
    return $.ajax({
        url: `api/activities`,
        method: 'POST',
        data: {activity}
    })
}

export const updateActivity = activityId => {
    return $.ajax({
        url: `api/activities/${activityId}`,
        method: 'PATCH',
        data: {activityId}
    })
}

export const deleteActivity = activityId => {
    return $.ajax({
        url: `api/activities/${activityId}`,
        method: 'DELETE',
        data: {activityId}
    })
}