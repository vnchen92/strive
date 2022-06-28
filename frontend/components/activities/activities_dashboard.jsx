import React from 'react';
import ActivityItem from './activity_item';

const ActivitiesDashboard = ({ filteredActivities }) => {

    return(
        <div>
        {
            Object.values(filteredActivities).map(activity => {
                return <div key={activity.id}><ActivityItem activity={activity} /></div>
            })
        }
        </div>
    )
}

export default ActivitiesDashboard;