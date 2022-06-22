import React from 'react';
import CurrentUser from './currentuser';
import ActivitiesDashboard from '../activities/activities_dashboard';


const Dashboard = ({currentUser, activities}) => {
    debugger
    return (
        <div>
            <CurrentUser currentUser={currentUser} />
            <ActivitiesDashboard activities={activities} />
        </div>
    )
}

export default Dashboard;