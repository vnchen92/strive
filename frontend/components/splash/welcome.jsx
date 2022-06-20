import React from 'react';
import { Link, useHistory, useNavigate, withRouter } from 'react-router-dom';

const Welcome = ({currentUser, logout, location}) => {
    const currentPath = location.pathname;
    let linkToRender;
    if (currentPath === '/' || currentPath === '/signup') {
        linkToRender = <Link to='/login'><h1>LoginButton</h1></Link>
    } else if (currentPath === '/login') {
        linkToRender = <Link to='/signup'><h1>SignUpButton</h1></Link>
    }

    const history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        logout();
        history.push('/');
    }
    
    return (
        <header>
            <div>
                {
                currentUser ? (
                    // PLACEHOLDER FOR DASHBOARD
                    <div>
                        <nav className='nav-bar'>
                            <Link to='/'><h1>Strive</h1></Link>
                            <p>Hello, {currentUser.name}</p>
                            <button onClick={handleClick}>Log Out</button>
                        </nav>
                    </div>
                    // PLACEHOLDER FOR DASHBOARD
                ) : (
                    <div>
                        <nav className='nav-bar'>
                            <Link to='/'><h1>Strive</h1></Link>
                            {linkToRender}
                        </nav>
                    </div>
                )
                }
            </div>
        </header>
    )
}

export default withRouter(Welcome);