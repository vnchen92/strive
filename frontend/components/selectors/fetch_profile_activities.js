export const fetchProfileActivities = (entities, session, activities) => {
    let currentUser = entities.users[session.id];
    let filteredActivities = {};

    Object.values(activities).map(activity => {
        if (currentUser.id === activity.authorId) {
            filteredActivities[activity.id] = {...activity}
        }
    })

    return filteredActivities;
}