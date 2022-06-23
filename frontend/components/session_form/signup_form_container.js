import { signup, removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors,
        formType: 'Sign Up',
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => {
        debugger
            return dispatch(signup(user))},
        removeErrors: () => dispatch(removeErrors()),
        openModal: () => dispatch(openModal()),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('restofsignup'))}>
        //       Sign Up
        //     </button>
        // ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);