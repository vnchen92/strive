export const fetchDashboardActivities = (entities, session, allActivities, follows) => {
    let currentUser = entities.users[session.id];
    let allUsers = entities.users;
    let filteredActivities = {};
    let filteredFollowers = [];
    //debugger
    Object.values(follows).map(follow => {
        //debugger
        if (currentUser.id === follow.follower_id && !filteredFollowers.includes(follow.following_id)){
            //debugger
            filteredFollowers.push(follow.following_id)
            //debugger
        }
    })
    Object.values(allActivities).map(activity => {
        //debugger
        Object.values(allUsers).map(user => {
            if (filteredFollowers.includes(activity.author_id) && user.id === activity.author_id) {
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