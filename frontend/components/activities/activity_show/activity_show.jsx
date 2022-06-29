import React from 'react';
import { Link } from 'react-router-dom';
import Map from './map';
import Elevation from './elevation';

const ActivityShow = ({activity, users, currentUser, deleteActivity, history}) => {
    let component;
    if (activity.staticMapUrl !== null) {
        //debugger
        component = <Map activity={activity} />
    } else {
        //debugger
        component = <></>
    }

    const handleClick = e => {
        deleteActivity(activity.id)
            .then(() => history.push('/dashboard/my_activities'));
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
                    <div>
                        <Link to={`/actitivies/${activity.id}/edit`}><img src="https://d3nn82uaxijpm6.cloudfront.net/assets/actions_edit_normal_small-8fcf75e32d0b379f379717418769a17bbfefcea124043c0b81417c4926e6e335.svg" alt="" /></Link>
                        <img onClick={handleClick} src="https://d3nn82uaxijpm6.cloudfront.net/assets/navigation_more_normal_small-c15aecd73925298b5d604e07abf813b37392517874644531f08ae1161f3f00b6.svg" alt="" />
                    </div>
                ) : (
                    <></>
                )
            }
            <div className='activity-show-container'>
                <div className='activity-show-top'>
                    <div className='activity-badge-and-name'>
                        <img className='badge' src="https://d3nn82uaxijpm6.cloudfront.net/assets/svg/badges_multicolor_summit_small-a9f1366377ea9bcfb95dd73917f97b674a8c64d9f00bb029d58c23730158b328.svg" alt="" />
                        <h1 className='activity-show-user-name'>{`${userOfActivity.firstName} ${userOfActivity.lastName}`}</h1>
                    </div>
                    <div className='activity-show-row'>
                        <div className='activity-show-left'>
                            <img className='activity-show-icon' src={userOfActivity.profilePic} alt="" />
                            <div className='activity-show-text-container'>
                                <p className='activity-show-postedon'>{activity.postedOn}</p>
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
                                <p className='activity-show-num'>{activity.hours || '00'}:{activity.minutes}:{activity.seconds || '00'}</p>
                                <p className='activity-show-label'>Moving Time</p>
                            </div>
                            <div className='activity-num-container'>
                                <p className='activity-show-num'>{activity.pace}mi/min</p>
                                <p className='activity-show-label'>Pace</p>
                            </div>
                        </div>
                    </div>
                </div>
                {component}
                {/* <Elevation polyline={activity.staticMapUrl}/> */}
            </div>
        </div>
    )
}

export default ActivityShow;