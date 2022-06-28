import React from 'react';
import { withRouter} from 'react-router-dom';

const DemoLogin = (props) => {
    const demoUser = {
        email: 'demouser@demo.com',
        password: "demouser"
    }
    
    const handleClick = e => {
        e.preventDefault();
        props.login(demoUser)
            .then(() => props.history.push('./dashboard'))
    }

    return (
        <button type='submit' onClick={handleClick}>Demo Log In</button>
    )
}

export default withRouter(DemoLogin);