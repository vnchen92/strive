import { signup, removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import RestOfSignupForm from './rest_of_signup_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors,
        ui: state.ui.modal,
        formType: 'Sign Up'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestOfSignupForm);