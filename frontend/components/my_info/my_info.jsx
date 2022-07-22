import React from 'react';

const MyInfo = props => {
    return (
        <>
            <div className='myinfo-container'>
                <div className='myinfo-icon-and-label-container'>
                    <div className='myinfo-icon-and-label-inner-container'>
                        <img src="/assets/icons8-github-100" alt="" />
                        GitHub
                    </div>
                </div>
                <div className='myinfo-icon-and-label-container'>
                    <div className='myinfo-icon-and-label-inner-container'>
                        <img src="/assets/icons8-linkedin-100" alt="" />
                        LinkedIn
                    </div>
                </div>
            </div>
            <div className='myinfo-container-2'>

                    <div className='myinfo-icon-and-label-container'>
                        <div className='myinfo-icon-and-label-inner-container'>
                            <img src="/assets/icons8-angellist-100" alt="" />
                            AngelList
                        </div>
                    </div>
                    <div className='myinfo-icon-and-label-container'>
                        <div className='myinfo-icon-and-label-inner-container'>
                            <img src="/assets/icons8-girl-64" alt="" />
                            Portfolio
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default MyInfo;