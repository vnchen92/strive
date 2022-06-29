import { connect } from 'react-redux';
import ActivitiesDashboard from '../activities/activities_dashboard';
import { fetchUserActivities } from '../selectors/fetch_user_activities';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[session.id],
        user: state.entities.users[ownProps.match.params.id],
        filteredActivities: fetchUserActivities(state.entities.users[ownProps.match.params.id], state.entities.activities)
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)