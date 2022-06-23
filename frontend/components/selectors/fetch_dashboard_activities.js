export const fetchDashboardPosts = (entities, session, allActivities = {}, follows = {}) => {
    let currentUser = entities.users[session.id];
    let filteredActivities = {};
    let filteredFollowers = [];
    debugger
    Object.entries(follows).map(follow => {
        debugger
        if (currentUser.id === follow[1].follower_id){
            debugger
            filteredFollowers.push(follow[1].follower_id)
            debugger
        }
    })
    Object.entries(allActivities).map(activity => {
        debugger
        if (filteredFollowers.includes(activity[1].author_id)) {
            debugger
            filteredActivities[activity[1].id] = activity[1];
            debugger
        }
    })
    debugger
    return filteredActivities;
}