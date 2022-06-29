export const fetchUserActivities = (user, activities) => {
    let filteredActivities = {};

    Object.values(activities).map(activity => {
        if (user.id === activity.authorId) {
            filteredActivities[activity.id] = {...activity}
        }
    })

    return filteredActivities;
}