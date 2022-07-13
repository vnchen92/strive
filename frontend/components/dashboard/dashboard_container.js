import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllActivities } from '../../actions/activities_actions';
import { fetchAllUsers } from '../../actions/users_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        firstActivity: Object.values(entities.activities)[0],
        firstFollow: Object.values(entities.follows)[0],
        follows: entities.follows || {}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFollows: () => dispatch(fetchAllFollows()),
        fetchAllActivities: () => dispatch(fetchAllActivities()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)