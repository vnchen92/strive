export const fetchAllActivities = () => {
    return $.ajax({
        url: 'api/activities',
        method: 'GET'
    })
}

export const fetchActivity = activity => {
    return $.ajax({
        url: `api/activities/${activity.id}`,
        method: 'GET',
        data: {activity}
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

export const deleteActivity = activity => {
    return $.ajax({
        url: `api/activities/${activity.id}`,
        method: 'DELETE',
        data: {activity}
    })
}