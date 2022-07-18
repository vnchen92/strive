const isLiked = (currentUser, kudos, activityId) => {
    if (kudos[activityId] !== undefined) { //if there are likes on this post
        let kudosArray = Object.values(kudos[activityId])
        for (let i = 0; i < kudosArray.length; i++) {
            if (kudosArray[i].userId === currentUser.id) {
                return true
            }
        }
        return false;
    } else { //if there are no likes on this post
        return false;
    }
}

export default isLiked;