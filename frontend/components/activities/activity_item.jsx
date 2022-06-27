import React from 'react';
import { Link } from 'react-router-dom';

const ActivityItem = ({activity}) => {
    return (
        <div className='activity-container'>
            <div>
                <h1>{`${activity.firstName} ${activity.lastName}`}</h1>
                <p>{activity.createdAt}</p>
                <p><Link to={`/activities/${activity.id}`}>{activity.title}</Link></p>
                <p>{activity.body}</p>
                <p>Distance: {activity.distance} mi</p>
                <p>Pace: {activity.pace}/mi</p>
                <p>Time: {activity.hours}hr {activity.minutes}m {activity.seconds || 0}s</p>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:${activity.staticMapUrl}&key=${window.MAPS_API_KEY}`} alt="" />
            </div>
        </div>
    )
}

export default ActivityItem;