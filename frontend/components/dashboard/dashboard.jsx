import React from 'react';
import CurrentUser from './currentuser';
import Post from '../posts/post';


const Dashboard = ({currentUser, posts}) => {
    debugger
    return (
        <div>
            <CurrentUser currentUser={currentUser} />
            <Post />
        </div>
    )
}

export default Dashboard;