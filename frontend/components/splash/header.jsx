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
                                <div>
                                    <div className='nav-bar-dropdown'>
                                        <button className='nav-bar-dropdown-btn'>Posts+</button>
                                        <div className='nav-bar-dropdown-container'>
                                            <p className='nav-bar-dropdown-link'><Link to='/manual'>Add Manual Entry</Link></p>
                                            <p className='nav-bar-dropdown-link'><Link to={`/athletes/${currentUser.id}/posts/new`}>Create a post</Link></p>
                                        </div>
                                    </div>
                                    <button className='nav-bar-btn' onClick={handleClick}>Log Out</button>
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