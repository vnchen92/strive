import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RestOfSignupForm from './rest_of_signup_form';
//import RestOfSignupFormContainer from './rest_of_signup_form';

const Modal = ({modal, closeModal, email, password, processForm}) => {
    // if (!modal) {
    //     return null;
    // }

    // let component;
    // switch(modal) {
    //     case 'restofsignup':
    //         component = <RestOfSignupFormContainer />;
    //         break;
    //     default:
    //         return null;
    // }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {/* { component } */}
                {/* <RestOfSignupFormContainer email={this.props.email} password={props.password} closeModal={closeModal} processForm={props.processForm}/> */}
                <RestOfSignupForm email={email} password={password} closeModal={closeModal} processForm={processForm}/>
            </div>
        </div>
    )
}

export default Modal;

// const mapStateToProps = (state, ownProps) => {
//     debugger
//     return {
//         modal: state.ui.modal
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);