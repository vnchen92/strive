import React from 'react';

const ActivityItem = ({activity}) => {
    return (
        <li key={activity.id}>
            <h1>{`${activity.firstName} ${activity.lastName}`}</h1>
            <p>{activity.createdAt}</p>
            <p>{activity.title}</p>
            <p>{activity.body}</p>
        </li>
    )
}

export default ActivityItem;