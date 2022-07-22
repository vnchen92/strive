import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard';
import { fetchFollowers } from '../selectors/fetch_followers';
import { fetchFollowings } from '../selectors/fetch_followings';
import { fetchUserActivities } from '../selectors/fetch_user_activities';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllActivities } from '../../actions/activities_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import { fetchAllKudos } from '../../actions/kudo_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        followings: fetchFollowings(state.entities.users[ownProps.match.params.id], state.entities.follows),
        followers: fetchFollowers(state.entities.users[ownProps.match.params.id], state.entities.follows),
        activitiesNum: Object.values(fetchUserActivities(state.entities.users[ownProps.match.params.id], state.entities.activities)).length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFollows: () => dispatch(fetchAllFollows()),
        fetchAllActivities: () => dispatch(fetchAllActivities()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllKudos: () => dispatch(fetchAllKudos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)