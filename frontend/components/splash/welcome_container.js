import { logout, login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = state => {
    return {
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

