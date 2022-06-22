import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        activities: state.activites
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)