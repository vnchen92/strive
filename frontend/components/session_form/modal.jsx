import React from 'react';
import RestOfSignupForm from './rest_of_signup_form';

export const Modal = ({closeModal, firstName, lastName, weight, birthdate, handleSubmit, update, errors}) => {

    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <button className='modal-exit-x' onClick={closeModal}>X</button>
                    <RestOfSignupForm 
                        firstName={firstName}
                        lastName={lastName}
                        weight={weight}
                        birthdate={birthdate} 
                        closeModal={closeModal} 
                        errors={errors}
                        handleSubmit={handleSubmit}
                        update={update} 
                    />
            </div>
        </div>
    )
}