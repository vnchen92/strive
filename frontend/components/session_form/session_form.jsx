import React from 'react';
import { withRouter } from 'react-router-dom';
import DemoLogin from '../demo_login/demo_login';

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
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
        this.props.processForm(user)
            .then(() => this.props.history.push('./dashboard'));
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
        const {errors, amountOfUsers, formType, processForm, location} = this.props;
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
                            <button className='session-submit' type='submit'>{formType}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);