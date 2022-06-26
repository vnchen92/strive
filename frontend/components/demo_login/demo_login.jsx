import React, {useState} from 'react';
import {useHistory, withRouter} from 'react-router-dom';

const DemoLogin = (props) => {
    const demoUser = {
        // firstName: 'demouser',
        // birthdate: '2022/06/17',
        // weight: 0,
        email: 'demouser@demo.com',
        password: "demouser"
    }

    //const history = useHistory();
    
    const handleClick = e => {
        e.preventDefault();
        //debugger
        props.login(demoUser)
            .then(() => props.history.push('./dashboard'))
        //debugger
        //history.push('/dashboard')
    }

    return (
        <button type='submit' onClick={handleClick}>Demo Log In</button>
    )
}

export default withRouter(DemoLogin);