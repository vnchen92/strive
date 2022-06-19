import React from 'react';
import { Link } from 'react-router-dom';

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
        this.props.processForm(user);
    }

    update(field){
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render(){
        const {errors, formType, processForm} = this.props;
        const otherLink = () => {
            if (formType === "Sign Up") {
                <Link to='/login'>Log In</Link>
            } else {
                <Link to='/signup'>Sign Up</Link>
            }
        }
        return (
            <div>
                {/* <p>{errors}</p> */}
                <p>{otherLink()}</p>
                <form onSubmit={this.handleSubmit}>{formType}
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