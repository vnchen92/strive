import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
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