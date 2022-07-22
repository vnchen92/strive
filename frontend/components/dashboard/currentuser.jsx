import React, { useEffect, useState } from 'react';
import { fetchActivity } from '../../actions/activities_actions';

const CurrentUser = ({user, followers, followings, activitiesNum}) => {
    const [latest, setLatest] = useState({})
    const [isLoaded, setLoaded] = useState(false)

    
    // useEffect(() => {
        fetchActivity(user.id)
            .then(res => {
                setLatest({res})
            })
            .then(() => {
                setLoaded(true)
            })
    // }, [])

    if (isLoaded) {
        return (
            <div className='profile-container'>
                <div className='profile-top-container'>
                <div className='profile-img-container'>
                    <img className='profile-pic' src={user.profilePic} alt="" />
                </div>
                    <h1 className='profile-name'>{`${user.firstName} ${user.lastName}`}</h1>
                    <ul className='profile-tabs-container'>
                        <li className='profile-tab-container'>
                            <p className='profile-tab'>Following</p>
                            <p className='profile-num'>{followings}</p>
                        </li>
                        <li className='profile-tab-container'>
                            <p className='profile-tab'>Followers</p>
                            <p className='profile-num'>{followers}</p>
                        </li>
                        <li className='profile-tab-container'>
                            <p className='profile-tab'>Activities</p>
                            <p className='profile-num'>{activitiesNum}</p>
                        </li>
                    </ul>
                </div>
                <div className='profile-bottom-container'>
                    <p className='profile-latest'>Latest Activity</p>
                    <p className='profile-latest-bold'>{latest.res.title}&#9679;{latest.res.postedOn}</p>
                </div>
            </div>
        )
    } else {
        <></>
    }
}

export default CurrentUser;

