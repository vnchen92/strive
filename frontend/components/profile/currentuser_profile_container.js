import { connect } from 'react-redux';
import { fetchAllComments, deleteComment } from '../../actions/comments_actions';
import { createKudo } from '../../actions/kudo_actions';
import ActivitiesDashboard from '../activities/activities_dashboard';
import { fetchProfileActivities } from '../selectors/fetch_profile_activities';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        filteredActivities: fetchProfileActivities(entities, session, entities.activities),
        comments: entities.comments,
        kudos: entities.kudos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllComments : () => dispatch(fetchAllComments()),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        createKudo: (kudo) => dispatch(createKudo(kudo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)