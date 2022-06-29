import { connect } from 'react-redux';
import ActivitiesDashboard from '../activities/activities_dashboard';
import { fetchProfileActivities } from '../selectors/fetch_profile_activities';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        filteredActivities: fetchProfileActivities(entities, session, entities.activities)
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)