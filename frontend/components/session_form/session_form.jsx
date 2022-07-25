import React from 'react';
import { withRouter } from 'react-router-dom';
import DemoLogin from '../demo_login/demo_login';
import { Modal } from './modal';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            birthdate: '',
            weight: ''
        }
    }

    componentDidMount(){
        if (this.props.errors.session.length > 0 ){
            this.props.removeErrors();
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = {...this.state};
        this.props.processForm(user)
            .then(() => this.props.history.push('./dashboard'));
        if (this.props.formType !== 'Log In') {
            this.props.closeModal();
        }
    }

    handleClick = e => {
        this.props.openModal();
    }

    update = field => {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    showErrors = () => {
        return (
            this.props.errors.session.map((error, idx) => {
                return <li className='session-error' key={idx}>{error}</li>
            })
        )
    }

    render(){
        const {errors, formType, processForm, location, modal, closeModal} = this.props;

        const images = ['https://github.com/vnchen92/strive/blob/main/app/assets/images/jenny-hill-mQVWb7kUoOE-unsplash.jpg?raw=true', 'https://github.com/vnchen92/strive/blob/main/app/assets/images/pexels-josh-willink-701016.jpg?raw=true', 'https://github.com/vnchen92/strive/blob/main/app/assets/images/pexels-yogendra-singh-1469880.jpg?raw=true'];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        const myStyle = {
            backgroundImage: `url(${randomImage})`
        }

        return (
            <div className='session-container' style={myStyle}>
                <div className='session-inner-container'>
                    <h1 className='session-title'>{location.pathname === '/login' ? formType : "Join Strive today, it's free."}</h1>
                    <ul className='session-errors-container'>
                        {this.showErrors()}
                    </ul>
                    <div className='session-btn-container'>
                        {
                        location.pathname === '/login' ? <div className='session-demo-btn'><DemoLogin login={processForm} /></div> : <></>
                        }
                        <form className='session-form' onSubmit={this.handleSubmit}>
                            <label>
                                <input className='session-email'
                                    type="text"
                                    placeholder='email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label>
                                <input className='session-password'
                                    type="password"
                                    placeholder='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            { 
                            formType === 'Log In' ?
                                <button className='session-submit' type='submit'>{formType}</button>
                                :
                                <div className='session-submit' onClick={this.handleClick}>{formType}</div>
                            }
                            {
                            modal && 
                            <Modal 
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                weight={this.state.weight}
                                birthdate={this.state.birthdate} 
                                errors={errors}
                                closeModal={closeModal}
                                handleSubmit={this.handleSubmit}
                                update={this.update} 
                            />
                            }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);