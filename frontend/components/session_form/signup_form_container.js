import { signup, removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
    return {
        errors: state.errors,
        formType: 'Sign Up'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);