import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllActivities } from '../../actions/activities_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //fetchAllFollows: () => dispatch(fetchAllFollows()),
        //fetchAllActivities: () => dispatch(fetchAllActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)