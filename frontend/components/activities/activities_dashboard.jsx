import React from 'react';
import ActivityItem from './activity_item';

const ActivitiesDashboard = ({ filteredActivities, allUsers }) => {

    return(
    <div>
    {
        Object.values(filteredActivities).map(activity => {
            return <ActivityItem activity={activity} allUsers={allUsers} />
        })
    }
    </div>
    )
}

export default ActivitiesDashboard;