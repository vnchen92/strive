export const fetchDashboardActivities = (entities, session, allActivities, follows) => {
    let currentUser = entities.users[session.id];
    let allUsers = entities.users;
    let filteredActivities = {};
    let filteredFollowers = [];
    Object.values(follows).map(follow => {
        if (currentUser.id === follow.followerId && !filteredFollowers.includes(follow.followingId)){
            filteredFollowers.push(follow.followingId)
        }
    })
    Object.values(allActivities).map(activity => {
        Object.values(allUsers).map(user => {
            if (filteredFollowers.includes(activity.authorId) && user.id === activity.authorId) {
    
                filteredActivities[activity.id] = {firstName: user.firstName, lastName: user.lastName, profilePic: user.profilePic,...activity}
            }  
        })
    })
    return filteredActivities;
}