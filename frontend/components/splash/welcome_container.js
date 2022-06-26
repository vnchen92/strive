import { logout, login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = ({entities, session}) => {
    //debugger
    return {
        currentUser: entities.users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

