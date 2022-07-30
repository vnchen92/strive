export const fetchAllActivities = () => {
    return $.ajax({
        url: 'api/activities',
        method: 'GET'
    })
}

export const fetchActivity = userId => {
    return $.ajax({
        url: `api/activities/${userId}`,
        method: 'GET',
        data: {userId}
    })
}

export const createActivity = activity => {
    return $.ajax({
        url: `api/activities`,
        method: 'POST',
        data: {activity}
    })
}

export const updateActivity = activity => {
    return $.ajax({
        url: `api/activities/${activity.id}`,
        method: 'PATCH',
        data: {activity}
    })
}

export const deleteActivity = activityId => {
    return $.ajax({
        url: `api/activities/${activityId}`,
        method: 'DELETE',
        data: {activityId}
    })
}