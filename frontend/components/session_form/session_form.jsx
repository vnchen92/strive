import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {...this.state};
        this.props.processForm(user)
            .then(() => this.props.history.push('./'));
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
                return <li key={idx}>{error}</li>
            })
        )
    }

    render(){
        const {errors, formType, processForm} = this.props;
        return (
            <div>
                {/* <p>{formType === 'Sign Up' ? <Link to='/login'>Log In</Link> : <Link to='/signup'>Sign Up</Link>}</p> */}
                <ul>
                    {this.showErrors()}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button type='submit'>{formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;