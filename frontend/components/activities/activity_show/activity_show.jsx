import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Map from './map';
import Elevation from './elevation';

const ActivityShow = ({activity, users, currentUser, deleteActivity, history}) => {

    const timeArray = activity.time.split(":");

    const postedOnConverted = new Date(activity.postedOn).toString().split(" ").splice(0, 4).join(" ")

    const handleClick = e => {
        deleteActivity(activity.id)
        history.push('/dashboard/my_activities')
    }

    let userOfActivity = {};

    Object.values(users).map(user => {
        if (user.id === activity.authorId) {
            userOfActivity = {...user};
            return;
        }
    })

    return (
        <div className='activity-show-ent-container'>
            {
                currentUser.id === activity.authorId ? (
                    <div className='activity-tools-container'>
                        <Link className='tool-container-edit' to={`/activities/${activity.id}/edit`}><img className='edit-tool' src="https://d3nn82uaxijpm6.cloudfront.net/assets/actions_edit_normal_small-8fcf75e32d0b379f379717418769a17bbfefcea124043c0b81417c4926e6e335.svg" alt="" /></Link>
                        <div className='tool-container'>
                            <img className='delete-tool' onClick={handleClick} src="https://d3nn82uaxijpm6.cloudfront.net/assets/navigation_more_normal_small-c15aecd73925298b5d604e07abf813b37392517874644531f08ae1161f3f00b6.svg" alt="" />
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className='activity-show-container'>
                <div className='activity-show-top'>
                    <div className='activity-badge-and-name'>
                        <img className='badge' src="https://d3nn82uaxijpm6.cloudfront.net/assets/svg/badges_multicolor_summit_small-a9f1366377ea9bcfb95dd73917f97b674a8c64d9f00bb029d58c23730158b328.svg" alt="" />
                        <h1 className='activity-show-user-name'><Link to={`/athletes/${userOfActivity.id}`}>{`${userOfActivity.firstName} ${userOfActivity.lastName}`}</Link></h1>
                    </div>
                    <div className='activity-show-row'>
                        <div className='activity-show-left'>
                            <img className='activity-show-icon' src={userOfActivity.profilePic} alt="" />
                            <div className='activity-show-text-container'>
                                <p className='activity-show-postedon'>{postedOnConverted}</p>
                                <h1 className='activity-show-title'>{activity.title}</h1>
                                <p className='activity-show-body'>{activity.body}</p>
                            </div>
                        </div>
                        <div className='activity-show-right'>
                            <div className='activity-num-container'>
                                <p className='activity-show-num'>{activity.distance}mi</p>
                                <p className='activity-show-label'>Distance</p>
                            </div>
                            <div className='activity-num-container'>
                                <p className='activity-show-num'>{timeArray[0] || '00'}:{timeArray[1] || '00'}:{timeArray[2] || '00'}</p>
                                <p className='activity-show-label'>Moving Time</p>
                            </div>
                            <div className='activity-num-container'>
                                <p className='activity-show-num'>{activity.pace}mi/min</p>
                                <p className='activity-show-label'>Pace</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                    activity.staticMapUrl === null ? <></> : <Map activity={activity} />
                    }
                </div>
                <Elevation polyline={activity.staticMapUrl} pathPoints={activity.points.each_coord}/>
            </div>
        </div>
    )
}

export default ActivityShow;