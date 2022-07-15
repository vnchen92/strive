import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard';
import { fetchFollowers } from '../selectors/fetch_followers';
import { fetchFollowings } from '../selectors/fetch_followings';
import { fetchUserActivities } from '../selectors/fetch_user_activities';

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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)