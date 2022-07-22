import React from 'react';

const MyInfo = props => {
    return (
        <div className='myinfo-container'>
            <div className='myinfo-row-container'>
                <div className='myinfo-icon-name'>
                    GitHub
                </div>
                <div className='myinfo-icon-name'>
                    LinkedIn
                </div>
            </div>
            <div className='myinfo-row-container'>
                <div className='myinfo-icon-name'>
                    AngelList
                </div>
                <div className='myinfo-icon-name'>
                    Portfolio
                </div>
            </div>
        </div>
    )
}

export default MyInfo;