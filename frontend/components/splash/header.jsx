import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, currentPath, renderLogin, renderSignup, logout, history}) => {
    let linkToRender;

    if (currentPath === '/' || currentPath === '/signup') {
        linkToRender = renderLogin;
    } else if (currentPath === '/login') {
        linkToRender = renderSignup;
    }

    const handleClick = e => {
        e.preventDefault();
        logout()
            .then(() => history.push('/'))
    }

    return (
        <div>
            {
                currentUser ? (
                    <>
                        <header className='header-container'>
                            <nav className='nav-bar'>
                                <div className='nav-bar-title-container'>
                                    <h1 className='nav-bar-title'><Link to='/'>STRIVE</Link></h1>
                                </div>
                                <div className='nav-right-container'>
                                    <div className='nav-bar-dropdown'>
                                        <div className='nav-img-container'>
                                            <img className='nav-bar-dropdown-btn' src='/assets/add'/>
                                        </div>
                                        <div className='nav-bar-dropdown-container'>
                                            <div className='drop-down-link-container'>
                                                <Link className='nav-bar-dropdown-link' to='/manual'>Create a Route</Link>
                                            </div>
                                            <div className='drop-down-link-container'>
                                                <Link className='nav-bar-dropdown-link' to={`/athletes/${currentUser.id}/posts/new`}>Create a post</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='nav-bar-dropdown'>
                                        <div className='nav-img-container'>
                                            <img className='nav-bar-dropdown-btn' src={currentUser.profilePic} alt="" />
                                            <p>&nbsp; &or;</p>
                                        </div>
                                        <div className='nav-bar-dropdown-container'>
                                            <div className='drop-down-link-container'>
                                                <Link className='nav-bar-dropdown-link' to='/dashboard/my_activities'>My Profile</Link>
                                            </div>
                                            <div className='drop-down-link-container'>
                                                <button className='nav-bar-dropdown-link' onClick={handleClick}>Log Out</button><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </>
                ) : (
                    <header className='header-container'>
                        <nav className='nav-bar'>
                            <div className='nav-bar-title-container'>
                                <h1 className='nav-bar-title'><Link to='/'>STRIVE</Link></h1>
                            </div>
                            {linkToRender}
                        </nav>
                    </header>
                )
            }
        </div>
    )
}

export default Header;