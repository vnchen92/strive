import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ActivitiesDashboard from '../activities/activities_dashboard';
import { fetchUserActivities } from '../selectors/fetch_user_activities';
import { fetchAllComments, deleteComment } from '../../actions/comments_actions';
import { createKudo, deleteKudo } from '../../actions/kudo_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.id],
        filteredActivities: fetchUserActivities(state.entities.users[ownProps.match.params.id], state.entities.activities),
        comments: state.entities.comments,
        kudos: state.entities.kudos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllComments : () => dispatch(fetchAllComments()),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        createKudo: (kudo) => dispatch(createKudo(kudo)),
        deleteKudo: kudoId => dispatch(deleteKudo(kudoId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard));