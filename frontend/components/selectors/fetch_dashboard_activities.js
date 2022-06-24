export const fetchDashboardPosts = (entities, session, allActivities, follows) => {
    let currentUser = entities.users[session.id];
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
        if (filteredFollowers.includes(activity.author_id)) {
            //debugger
            filteredActivities[activity.id] = activity;
            //debugger
        }
    })
    //debugger
    return filteredActivities;
}