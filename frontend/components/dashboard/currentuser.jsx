import React from 'react';

const CurrentUser = ({currentUser}) => {
    debugger
    return (
        <div>
            <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
            <ul>
                <li>Following</li>
                <li>Followers</li>
                <li>Activities</li>
            </ul>
            <p>Most Recent Activity</p>
        </div>
    )
}

export default CurrentUser;

