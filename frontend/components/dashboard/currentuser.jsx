import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchActivity } from '../../actions/activities_actions';

const CurrentUser = ({user, followers, followings, activitiesNum}) => {
    const [latest, setLatest] = useState({})
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchActivity(user.id)
            .then(res => {
                setLatest({res})
            })
            .then(() => {
                setLoaded(true)
            })
    }, [])

    if (isLoaded) {
        let postedOnConverted;
        if (Object.values(latest.res).length > 0) { 
            postedOnConverted = new Date(latest.res.postedOn).toString().split(" ").splice(0, 4).join(" ");
        } else {
            postedOnConverted = "";
        }
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
                    <p className='profile-latest-date'>{postedOnConverted}</p>
                    <p className='profile-latest-bold'>{<Link to={`/activities/${latest.res.id}`}>{latest.res.title}</Link> || <Link to={`/athletes/${user.id}/posts/new`}>~Create your first activity~</Link>}</p>
                </div>
            </div>
        )
    } else {
        <></>
    }
}

export default CurrentUser;

