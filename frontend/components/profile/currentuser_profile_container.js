import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comments_actions';
import ActivitiesDashboard from '../activities/activities_dashboard';
import { fetchProfileActivities } from '../selectors/fetch_profile_activities';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        filteredActivities: fetchProfileActivities(entities, session, entities.activities),
        comments: entities.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllComments : () => dispatch(fetchAllComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)