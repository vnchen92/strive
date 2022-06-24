import React from 'react';
import ActivityItem from './activity_item';

const ActivitiesDashboard = ({ filteredActivities }) => {

    return(
    <div>
    {
        Object.values(filteredActivities).map(activity => {
            return <ActivityItem activity={activity} />
        })
    }
    </div>
    )
}

export default ActivitiesDashboard;