import React from 'react';
import { withRouter } from 'react-router-dom';
import DemoLogin from '../demo_login/demo_login';
//import ModalContainer from './modal';
//import RestOfSignupForm from './rest_of_signup_form';
//import RestOfSignupForm from './rest_of_signup_form';
import Modal from './modal';

class SessionForm extends React.Component{
    constructor(props){
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
        this.props.removeErrors();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {...this.state};
        //if (this.props.formType === 'Log In') {
            this.props.processForm(user)
                .then(() => this.props.history.push('./dashboard'));
        //} else {
            //this.props.openModal();
            //return <RestOfSignupForm user={user} closeModal={this.props.closeModal} />
        //}
    }

    update(field){
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
        const {errors, formType, processForm, location, modal} = this.props;
        // let forSignUp;
        // if (location.pathname === '/signup') {
        //     forSignUp = (
        //         <>
        //             <label>Name
        //                 <input type="text" value={this.state.name} onChange={this.update('name')}/>
        //             </label>
        //             <br />
        //             <label>Birthday
        //                 <input type="date" value={this.state.birthdate} onChange={this.update('birthdate')}/>
        //             </label>
        //             <br />
        //             <label>Weight
        //                 <input type="text" value={this.state.weight} onChange={this.update('weight')}/>
        //             </label>
        //         </>
        //     )
        // }
        return (
            <div className='session-container'>
                <div className='session-inner-container'>
                    <h1 className='session-title'>{location.pathname === '/login' ? formType : "Join Strive today, it's free."}</h1>
                    <ul className='session-errors-container'>
                        {this.showErrors()}
                    </ul>
                    <div className='session-btn-container'>
                        {
                        location.pathname === '/login' ? <button className='session-demo-btn'><DemoLogin login={processForm} /></button> : <></>
                        }
                        <form className='session-form' onSubmit={this.handleSubmit}>
                            <label>
                                <input className='session-email'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label>
                                <input className='session-password'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            {/* {forSignUp} */}
                            { formType === 'Log In' ?
                                <button className='session-submit' type='submit'>{formType}</button>
                                :
                                <button className='session-openModal' type='submit'onClick={() => this.props.openModal()}>{formType}</button>
                            }
                            <div className='session-modal-container' onClick={this.props.closeModal}>
                                {/* <RestOfSignupForm email={this.state.email} password={this.state.password} closeModal={this.props.closeModal} processForm={this.props.processForm}/> */}
                                {modal && <Modal email={this.state.email} password={this.state.password} closeModal={this.props.closeModal} processForm={this.props.processForm}/>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);