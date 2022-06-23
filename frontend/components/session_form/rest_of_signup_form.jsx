import React, { useState } from 'react';

// const RestOfSignupForm = ({user}) => {
//     const {name, setName} = useState("");
//     const {birthdate, setBirthdate} = useState("");
//     const {weight, setWeight} = useState("");

//     return (
//         <div>
//             <label>Name
//                 <input type="text" value={name} onChange={() => setName(name)}/>
//              </label>
//              <label>Birthday
//                 <input type="date" value={birthdate} onChange={() => setBirthdate(birthdate)}/>
//              </label>
//              <label>Weight
//                 <input type="text" value={weight} onChange={() => setWeight(weight)}/>
//             </label>
//         </div>
//     )
// }

class RestOfSignupForm extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
                email: props.email,
                password: props.password,
                firstName: "",
                lastName: "",
                birthdate: "",
                weight: ""
            }
    }

    handleSignUp = e => {
        e.preventDefault;
        const user = {...this.state};
        this.props.processForm(user)
                .then(() => this.props.history.push('./dashboard'))
        this.props.closeModal();
    }

    update(field){
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        //const {ui} = this.props;
        return (
                <div>
                    <form>
                        <label>First Name
                            <input type="text" value={this.state.firstName} onChange={this.update('firstName')}/>
                        </label>
                        <label>Last Name
                            <input type="text" value={this.state.lastName} onChange={this.update('lastName')}/>
                        </label>
                        <label>Birthday
                            <input type="date" value={this.state.birthdate} onChange={this.update('birthdate')}/>
                        </label>
                        <label>Weight
                            <input type="text" value={this.state.weight} onChange={this.update('weight')}/>
                        </label>
                        <button type='submit' onSubmit={this.handleSignUp}>Sign Up</button>
                    </form>
                </div>
        )
    }
}

export default RestOfSignupForm;