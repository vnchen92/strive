import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RestOfSignupForm from './rest_of_signup_form';

const Modal = ({modal, closeModal}) => {
    debugger
    if (!modal) {
        return null;
    }

    let component;
    switch(modal) {
        case 'restofsignup':
            component = <RestOfSignupForm />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);