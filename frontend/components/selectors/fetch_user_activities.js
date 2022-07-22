export const fetchUserActivities = (user, activities) => {
    let filteredActivities = {};

    Object.values(activities).map(activity => {
        if (user.id === activity.authorId) {
            filteredActivities[activity.id] = {firstName: user.firstName, lastName: user.lastName, profilePic: user.profilePic,...activity}
        }
    })

    return Object.values(filteredActivities).sort((a,b) => new Date(b.postedOn) - new Date(a.postedOn));
}