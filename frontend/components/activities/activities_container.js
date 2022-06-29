import { connect } from 'react-redux';
import ActivitiesDashboard from './activities_dashboard';
import { fetchDashboardActivities } from '../selectors/fetch_dashboard_activities';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        filteredActivities: fetchDashboardActivities(entities, session, entities.activities, entities.follows),
        allUsers: entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)