import React from 'react';
import { Link } from 'react-router-dom';
import DemoLogin from '../demo_login/demo_login';

const Welcome = ({login}) => {
    
    return (
        <div className='homepage-container'>
            <h2 className='homepage-header'>The #1 app for runners and cyclists</h2>
            <div className='homepage-img-and-btn-container'>
                <img className='homepage-img' alt="" srcSet="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg 1x, https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header@2x-5e0be9810fb0366d567d4d53f19c61b4d7bf4275c5b13356456efc4b5e16fc67.jpg 2x" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg"></img>
                <div className='homepage-btn-container'>
                    <div className='homepage-inner-btn-container'>
                        <div className='demo-btn'><DemoLogin login={login}/></div>
                        <button className='homepage-signup-btn'><Link to='/signup'>Sign up with email</Link></button>
                        <p className='homepage-small-text'>By signing up for Strive, you agree to the&nbsp;<span>Terms of Service.</span>&nbsp;View our&nbsp;<span>Private Policy</span>.</p>
                        <p className='homepage-small-text-last'>Already a Member?&nbsp;<span><Link to='/login'>Log In</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;