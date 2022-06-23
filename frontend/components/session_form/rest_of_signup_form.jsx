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
            // this.state = {
            //     email: props.email,
            //     password: props.password,
            //     firstName: "",
            //     lastName: "",
            //     birthdate: "",
            //     weight: ""
            // }
    }

    // handleSignUp = e => {
    //     e.preventDefault();
    //     const user = {...this.state};
    //     debugger
    //     this.props.processForm(user)
    //     this.props.closeModal()
    //             //.then(() => this.props.history.push('./dashboard')).catch(err => console.log(err))
    // }

    // update(field){
    //     return e => {
    //         e.preventDefault();
    //         this.setState({ [field]: e.currentTarget.value })
    //     }
    // }

    render() {
        //const {ui} = this.props;
        //debugger
        return (
                <div>
                    
                        <label>First Name
                            <input type="text" value={this.props.firstName} onChange={this.props.update('firstName')}/>
                        </label>
                        <label>Last Name
                            <input type="text" value={this.props.lastName} onChange={this.props.update('lastName')}/>
                        </label>
                        <label>Birthday
                            <input type="date" value={this.props.birthdate} onChange={this.props.update('birthdate')}/>
                        </label>
                        <label>Weight
                            <input type="text" value={this.props.weight} onChange={this.props.update('weight')}/>
                        </label>
                        <button type='submit' onSubmit={this.props.handleSubmit}>Sign Up</button>
                    
                </div>
        )
    }
}

export default RestOfSignupForm;