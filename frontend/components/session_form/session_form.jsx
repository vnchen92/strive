import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

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

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {...this.state, id: (this.props.amountOfUsers + 1)};
        this.props.processForm(user)
            .then(() => this.props.history.push('./'));
            //PLACEHOLDER FOR DASHBOARD- change path to ./dashboard
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
        const {errors, amountOfUsers, formType, processForm, location} = this.props;
        let forSignUp;
        if (location.pathname === '/signup') {
            forSignUp = (
                <>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </label>
                    <label>Birthday
                        <input type="date" value={this.state.birthdate} onChange={this.update('birthdate')}/>
                    </label>
                    <label>Weight
                        <input type="text" value={this.state.weight} onChange={this.update('weight')}/>
                    </label>
                </>
            )
        }
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
                    {forSignUp}
                    <button type='submit'>{formType}</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);