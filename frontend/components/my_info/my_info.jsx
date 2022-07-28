import React, { useState } from 'react';

const MyInfo = props => {
    const[github, setGithub] = useState("/assets/icons8-github-100")
    const[linkedin,setLinkedin] = useState("/assets/icons8-linkedin-100")
    const[angellist, setAngellist] = useState("/assets/icons8-angellist-100")
    const[portfolio, setPortfolio] = useState("/assets/icons8-girl-64")

    return (
        <>
            <div className='myinfo-container'>
                <div className='myinfo-icon-and-label-container'>
                    <div className='myinfo-icon-and-label-inner-container'>
                        <a href="https://github.com/vnchen92" target="_blank">
                            <img src={github} alt="" 
                                onMouseOver={() => setGithub("/assets/github-orange")}
                                onMouseOut={() => setGithub("/assets/icons8-github-100")}
                            />
                        </a>
                        <a href="https://github.com/vnchen92" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className='myinfo-icon-and-label-container'>
                    <div className='myinfo-icon-and-label-inner-container'>
                        <a href="https://www.linkedin.com/in/vivian-chen-8082169a/" target="blank">
                            <img src={linkedin} alt=""
                                onMouseOver={() => setLinkedin("/assets/linkedin-orange")}
                                onMouseOut={() => setLinkedin("/assets/icons8-linkedin-100")}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/vivian-chen-8082169a/" target="blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='myinfo-container-2'>

                    <div className='myinfo-icon-and-label-container'>
                        <div className='myinfo-icon-and-label-inner-container'>
                            <a href="https://angel.co/u/vivian-chen-42" target="_blank">
                                <img src={angellist} alt=""
                                    onMouseOver={() => setAngellist("/assets/angellist-orange")}
                                    onMouseOut={() => setAngellist("/assets/icons8-angellist-100")}
                                />
                            </a>
                            <a href="https://angel.co/u/vivian-chen-42" target="_blank">AngelList</a>
                        </div>
                    </div>
                    <div className='myinfo-icon-and-label-container'>
                        <div className='myinfo-icon-and-label-inner-container'>
                            <a href="https://vnchen92.github.io/" target="_blank">
                                <img src={portfolio} alt="" 
                                    onMouseOver={() => setPortfolio("/assets/portfolio-orange")}
                                    onMouseOut={() => setPortfolio("/assets/icons8-girl-64")}
                                />
                            </a>
                            <a href="https://vnchen92.github.io/" target="_blank">Portfolio</a>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default MyInfo;