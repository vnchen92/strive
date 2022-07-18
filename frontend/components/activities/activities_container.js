import { connect } from 'react-redux';
import ActivitiesDashboard from './activities_dashboard';
import { fetchDashboardActivities } from '../selectors/fetch_dashboard_activities';
import { fetchAllComments, deleteComment } from '../../actions/comments_actions';

const mapStateToProps = ({entities, session}) => {
    //debugger
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        filteredActivities: fetchDashboardActivities(entities, session, entities.activities, entities.follows),
        allUsers: entities.users,
        comments: entities.comments,
        kudos: entities.kudos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        deleteComment: (commentId) =>  dispatch(deleteComment(commentId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)