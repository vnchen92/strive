import React from 'react';
import CurrentUser from './currentuser';
import Posts from '../posts/posts';


const Dashboard = ({currentUser, posts}) => {
    debugger
    return (
        <div>
            <CurrentUser currentUser={currentUser} />
            <Posts posts={posts} />
        </div>
    )
}

export default Dashboard;