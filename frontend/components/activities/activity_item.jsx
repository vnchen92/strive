import React from 'react';

const ActivityItem = ({activity}) => {
    return (
        <ul key={activity.id}>
            <h1 key={activity.id}>{`${activity.firstName} ${activity.lastName}`}</h1>
            <li key={activity.id}>{activity.createdAt}</li>
            <li key={activity.id}>{activity.title}</li>
            <li key={activity.id}>{activity.body}</li>
        </ul>
    )
}

export default ActivityItem;