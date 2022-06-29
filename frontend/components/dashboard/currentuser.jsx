import React from 'react';

const CurrentUser = ({currentUser}) => {
    debugger
    return (
        <div className='profile-container'>
            <div className='profile-top-container'>
            <div className='profile-img-container'>
                <img className='profile-pic' src={currentUser.profilePic} alt="" />
            </div>
                <h1 className='profile-name'>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
                <ul className='profile-tabs-container'>
                    <li className='profile-tab-container'>
                        <p className='profile-tab'>Following</p>
                        <p className='profile-num'>#5</p>
                    </li>
                    <li className='profile-tab-container'>
                        <p className='profile-tab'>Followers</p>
                        <p className='profile-num'>#5</p>
                    </li>
                    <li className='profile-tab-container'>
                        <p className='profile-tab'>Activities</p>
                        <p className='profile-num'>#5</p>
                    </li>
                </ul>
            </div>
            <div className='profile-bottom-container'>
                <p className='profile-latest'>Latest Activity</p>
                <p className='profile-latest-bold'>CHANGE CHANGE CHANGE</p>
            </div>
        </div>
    )
}

export default CurrentUser;

