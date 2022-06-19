import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

