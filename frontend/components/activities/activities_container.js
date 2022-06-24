import { connect } from 'react-redux';
import ActivitiesDashboard from './activities_dashboard';
import { fetchDashboardPosts } from '../selectors/fetch_dashboard_activities';
import { fetchAllActivities } from '../../actions/activities_actions';
import { fetchAllFollows } from '../../actions/follow_actions';


const mapStateToProps = ({entities, session}) => {
    //debugger
    return {
        currentUser: entities.users[session.id],
        filteredActivities: fetchDashboardPosts(entities, session, entities.activities, entities.follows)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //fetchAllActivities: () => dispatch(fetchAllActivities()),
        //fetchAllFollows: () => dispatch(fetchAllFollows())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)