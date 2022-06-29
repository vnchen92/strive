import React, { useState } from 'react';

const RestOfSignupForm = ({ firstName, lastName, birthdate, weight, handleSubmit, update }) => {

    return (
        <div className='modal-container'>
            <h1 className='modal-title'>Create your profile</h1>
            <p className='modal-context'>This will give you a place to store workouts and help your friends find you.</p>
            <div className='modal-inputs-container'>
                <div className='modal-row'>
                    <div className='modal-input-container'>
                        <label className='modal-label'>First Name</label>
                        <input
                            className='modal-textbox'
                            type="text" 
                            value={firstName} 
                            onChange={update('firstName')}
                        />
                    </div>
                    <div className='modal-input-container'>
                        <label className='modal-label'>Birthday</label >
                        <input
                            className='modal-textbox'
                            type="date" 
                            value={birthdate} 
                            onChange={update('birthdate')}
                        />
                    </div>
                </div>
                <div className='modal-row'>
                    <div className='modal-input-container'>
                        <label className='modal-label'>Last Name</label >
                            <input 
                            className='modal-textbox'
                            type="text" 
                            value={lastName} 
                            onChange={update('lastName')}
                            />
                    </div>
                    <div className='modal-input-container'>
                    <label className='modal-label'>Weight</label >
                        <input
                            className='modal-textbox'
                            type="text" 
                            value={weight} 
                            onChange={update('weight')}
                        />
                    </div>
                </div>
                <div className='modal-continue-btn-container'>
                    <button className='modal-continue-btn' type='submit' onSubmit={handleSubmit}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default RestOfSignupForm;