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
                email: props.user.email,
                password: props.user.password,
                firstName: "",
                lastName: "",
                birthdate: "",
                weight: ""
            }
    }

    componentWillMount() {
        this.props.openModal();
    }

    update(field){
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        debugger
        return (
        <div>
            <form>
                <label>Name
                    <input type="text" value={this.state.name} onChange={this.update('name')}/>
                </label>
                <label>Birthday
                    <input type="date" value={this.state.birthdate} onChange={this.update('birthdate')}/>
                </label>
                <label>Weight
                    <input type="text" value={this.state.weight} onChange={this.update('weight')}/>
                </label>
                <button></button>
            </form>
        </div>
        )
    }
}

export default RestOfSignupForm;