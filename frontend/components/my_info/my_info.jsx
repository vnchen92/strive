import React from 'react';

const MyInfo = props => {
    return (
        <>
            <div className='myinfo-container'>
                <div className='myinfo-icon-and-label-container'>
                    <div className='myinfo-icon-and-label-inner-container'>
                        <img src="/images/assets/icons8-github-100" alt="" />
                        <a href="https://github.com/vnchen92" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className='myinfo-icon-and-label-container'>
                    <div className='myinfo-icon-and-label-inner-container'>
                        <img src="/images/assets/icons8-linkedin-100" alt="" />
                        <a href="https://www.linkedin.com/in/vivian-chen-8082169a/" target="blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='myinfo-container-2'>

                    <div className='myinfo-icon-and-label-container'>
                        <div className='myinfo-icon-and-label-inner-container'>
                            <img src="/images/assets/icons8-angellist-100" alt="" />
                            <a href="https://angel.co/u/vivian-chen-42" target="_blank">AngelList</a>
                        </div>
                    </div>
                    <div className='myinfo-icon-and-label-container'>
                        <div className='myinfo-icon-and-label-inner-container'>
                            <img src="/images/assets/icons8-girl-64" alt="" />
                            <a href="https://vnchen92.github.io/" target="_blank">Portfolio</a>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default MyInfo;