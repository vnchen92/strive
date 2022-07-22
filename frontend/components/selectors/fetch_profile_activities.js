export const fetchProfileActivities = (entities, session, activities) => {
    let currentUser = entities.users[session.id];
    let filteredActivities = {};

    Object.values(activities).map(activity => {
        if (currentUser.id === activity.authorId) {
            filteredActivities[activity.id] = {firstName: currentUser.firstName, lastName: currentUser.lastName, profilePic: currentUser.profilePic,...activity}
        }
    })

    return Object.values(filteredActivities).sort((a,b) => new Date(b.postedOn) - new Date(a.postedOn));
}