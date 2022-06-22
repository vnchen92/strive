import React from 'react';

const CurrentUser = ({currentUser}) => {
    debugger
    return (
        <div>
            <h1>{currentUser.name}</h1>
            <ul>
                <li>Following</li>
                <li>Follwers</li>
                <li>Activities</li>
            </ul>
            <p>Most Recent Activity</p>
        </div>
    )
}

export default CurrentUser;

