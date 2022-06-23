import React, { useState } from 'react';

const RestOfSignupForm = ({ firstName, lastName, birthdate, weight, handleSubmit, update }) => {

    return (
        <div className='modal-container'>
            <h1 className='modal-title'>Create your profile</h1>
            <p className='modal-context'>This will give you a place to store workouts and help your friends find you.</p>
            <div className='modal-inputs-container'>
                <label className='modal-label'>First Name
                    <input
                        className='modal-textbox'
                        type="text" 
                        value={firstName} 
                        onChange={update('firstName')}
                    />
                </label>
                <label className='modal-label'>Last Name
                    <input 
                        className='modal-textbox'
                        type="text" 
                        value={lastName} 
                        onChange={update('lastName')}
                    />
                </label >
                <label className='modal-label'>Birthday
                    <input
                        className='modal-textbox'
                        type="date" 
                        value={birthdate} 
                        onChange={update('birthdate')}
                    />
                </label>
                <label className='modal-label'>Weight
                    <input
                        className='modal-textbox'
                        type="text" 
                        value={weight} 
                        onChange={update('weight')}
                    />
                </label>
                <div className='modal-continue-btn-container'>
                    <button className='modal-continue-btn' type='submit' onSubmit={handleSubmit}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default RestOfSignupForm;