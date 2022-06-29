export const fetchUserActivities = (user, activities) => {
    let filteredActivities = {};

    Object.values(activities).map(activity => {
        if (user.id === activity.authorId) {
            filteredActivities[activity.id] = {firstName: user.firstName, lastName: user.lastName, profilePic: user.profilePic,...activity}
        }
    })

    return filteredActivities;
}