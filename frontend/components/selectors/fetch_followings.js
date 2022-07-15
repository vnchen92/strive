export const fetchFollowings = (user, follows) => {
    let followingCount = 0;
    Object.values(follows).forEach(follow => {
        if (user.id === follow.followerId)
        followingCount += 1;
    })
    return followingCount;
}