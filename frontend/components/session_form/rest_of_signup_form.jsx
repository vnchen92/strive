import React, { useState } from 'react';

const RestOfSignupForm = ({ firstName, lastName, birthdate, weight, handleSubmit, update }) => {

    return (
        <div>
            <label>First Name
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={update('firstName')}
                />
            </label>
            <label>Last Name
                <input 
                    type="text" 
                    value={lastName} 
                    onChange={update('lastName')}
                />
            </label>
            <label>Birthday
                <input 
                    type="date" 
                    value={birthdate} 
                    onChange={update('birthdate')}
                />
            </label>
            <label>Weight
                <input 
                    type="text" 
                    value={weight} 
                    onChange={update('weight')}
                />
            </label>
            <button type='submit' onSubmit={handleSubmit}>Sign Up</button>
        </div>
    )
}

export default RestOfSignupForm;