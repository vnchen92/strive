import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard';
import { fetchFollowers } from '../selectors/fetch_followers';
import { fetchFollowings } from '../selectors/fetch_followings';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        followings: fetchFollowings(state.entities.users[ownProps.match.params.id], state.entities.follows),
        followers: fetchFollowers(state.entities.users[ownProps.match.params.id], state.entities.follows) || 0
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)