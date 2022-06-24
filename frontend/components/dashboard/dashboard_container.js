import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllActivities } from '../../actions/activities_actions';

const mapStateToProps = ({entities, session}) => {
    //debugger
    return {
        currentUser: entities.users[session.id],
        firstActivity: Object.values(entities.activities)[0],
        firstFollow: Object.values(entities.follows)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFollows: () => dispatch(fetchAllFollows()),
        fetchAllActivities: () => dispatch(fetchAllActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)