import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <nav className='nav-bar'>
                <Link to='/'><h1>Strive</h1></Link>
                <p>Hello, {currentUser.name}</p>
                <button onClick={logout}>Log Out</button>
            </nav>
        </div>
    ) : (
        <div>
            <nav className='nav-bar'>
                <Link to='/'><h1>Strive</h1></Link>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
        </div>
    )
    
    return (
        <header>
            <div>
                {display}
            </div>
        </header>
    )
}

export default Welcome;