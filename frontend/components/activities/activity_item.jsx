import React from 'react';
import { Link } from 'react-router-dom';

const ActivityItem = ({activity, currentUser}) => {
    return (
        <div className='activity-container'>
            <div className='activity-icon-and-content-container'>
                <img className='activity-icon' src="" alt="" />
                <div className='activity-content-container'>
                    <p className='activity-user-name'>{`${activity.firstName || currentUser.firstName} ${activity.lastName || currentUser.lastName}`}</p>
                    <p className='activity-created-at'>{activity.postedOn}</p>
                    <h1 className='activity-title'><Link to={`/activities/${activity.id}`}>{activity.title}</Link></h1>
                    <p className='activity-body'>{activity.body}</p>
                    <div className='activity-tabs-container'>
                        <div className='activity-tab-container'>
                            <p className='activity-tab'>Distance</p>
                            <p className='activity-text'>{activity.distance}mi</p>
                        </div>
                        <div className='activity-tab-container'>
                            <p className='activity-tab'>Pace</p>
                            <p className='activity-text'>{activity.pace}/mi</p>
                        </div>
                        <div className='activity-tab-container'>
                            <p className='activity-tab'>Time</p>
                            <p className='activity-text'>{activity.hours}hr {activity.minutes}m {activity.seconds || 0}s</p>
                        </div>
                    </div>
                </div>
            </div>
            {
            activity.staticMapUrl ? <img className='activity-static-map' src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:${activity.staticMapUrl}&key=${window.MAPS_API_KEY}`} alt="" /> : <></>
            }
        </div>
    )
}

export default ActivityItem;