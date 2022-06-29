import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ActivitiesDashboard from '../activities/activities_dashboard';
import { fetchUserActivities } from '../selectors/fetch_user_activities';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.id],
        filteredActivities: fetchUserActivities(state.entities.users[ownProps.match.params.id], state.entities.activities)
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard));