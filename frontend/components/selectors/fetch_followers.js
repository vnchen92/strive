export const fetchFollowers = (user, follows) => {
    let followerCount = 0;
    Object.values(follows).forEach(follow => {
        if (user.id === follow.followingId)
        followerCount += 1;
    })
    debugger
    return followerCount;
}