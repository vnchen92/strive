export const fetchDashboardActivities = (entities, session, allActivities, follows) => {
    let currentUser = entities.users[session.id];
    let allUsers = entities.users;
    let filteredActivities = {};
    let filteredFollowers = [];
    //debugger
    Object.values(follows).map(follow => {
        //debugger
        if (currentUser.id === follow.followerId && !filteredFollowers.includes(follow.followingId)){
            //debugger
            filteredFollowers.push(follow.followingId)
            //debugger
        }
    })
    Object.values(allActivities).map(activity => {
        //debugger
        Object.values(allUsers).map(user => {
            if (filteredFollowers.includes(activity.authorId) && user.id === activity.authorId) {
                //filteredActivities[activity.id] = activity;
                //debugger

                filteredActivities[activity.id] = {userId: user.id, firstName: user.firstName, lastName: user.lastName,...activity}
                //debugger
            }  
        })
    })
    //debugger
    
    return filteredActivities;
}