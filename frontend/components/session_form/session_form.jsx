import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import DemoLogin from '../demo_login/demo_login';
import Footer from '../splash/footer';
import { Modal } from './modal';

const SessionForm = ({errors, formType, processForm, location, modal, closeModal, openModal, removeErrors}) => {
    const [state, setState] = useState({email: '', password: '', firstName: '', lastName: '', birthdate: '', weight: ''})

    const [myStyle, setMyStyle] = useState({})

    useEffect(() => {
        removeErrors();

        const generateRandomImage = () => {
            const images = ['jenny-hill-mQVWb7kUoOE-unsplash.jpg', 'pexels-josh-willink-701016.jpg', 'pexels-yogendra-singh-1469880'];
            const randomImage = images[Math.floor(Math.random() * images.length)];
            
            setMyStyle ({
                backgroundImage: `url(/assets/${randomImage})`
            })
        }

        generateRandomImage();

    },[])

    const handleSubmit = e => {
        e.preventDefault();
        processForm({...state})
            .then(() => this.props.history.push('./dashboard'));
        if (formType !== 'Log In') {
            closeModal();
        }
    }

    const handleClick = e => {
        openModal();
    }

    const update = field => {
        return e => {
            e.preventDefault();
            setState({ ...state, [field]: e.currentTarget.value })
        }
    }

    const showErrors = () => {
        return (
            errors.session.map((error, idx) => {
                return <li className='session-error' key={idx}>{error}</li>
            })
        )
    }

    return (
        <>
            <div className='session-container' style={myStyle}>
                <div className='session-inner-container'>
                    <h1 className='session-title'>{location.pathname === '/login' ? formType : "Join Strive today, it's free."}</h1>
                    <ul className='session-errors-container'>
                        {showErrors()}
                    </ul>
                    <div className='session-btn-container'>
                        {
                        location.pathname === '/login' ? <div className='session-demo-btn'><DemoLogin login={processForm} /></div> : <></>
                        }
                        <form className='session-form' onSubmit={handleSubmit}>
                            <label>
                                <input className='session-email'
                                    type="text"
                                    placeholder='email'
                                    value={state.email}
                                    onChange={update('email')}
                                />
                            </label>
                            <label>
                                <input className='session-password'
                                    type="password"
                                    placeholder='password'
                                    value={state.password}
                                    onChange={update('password')}
                                />
                            </label>
                            { 
                            formType === 'Log In' ?
                                <button className='session-submit' type='submit'>{formType}</button>
                                :
                                <div className='session-submit' onClick={handleClick}>{formType}</div>
                            }
                            {
                            modal && 
                            <Modal 
                                firstName={state.firstName}
                                lastName={state.lastName}
                                weight={state.weight}
                                birthdate={state.birthdate} 
                                errors={errors}
                                closeModal={closeModal}
                                handleSubmit={handleSubmit}
                                update={update} 
                            />
                            }
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(SessionForm);