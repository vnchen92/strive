import React from 'react';

const ActivityItem = ({activity}) => {
    return (
        <div>
            <h1 key={activity.id}>{activity.firstName}</h1>
        </div>
    )
}

export default ActivityItem;