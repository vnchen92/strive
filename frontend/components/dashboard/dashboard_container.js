import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllActivities } from '../../actions/activities_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import { fetchFollowings } from '../selectors/fetch_followings';
import { fetchFollowers } from '../selectors/fetch_followers';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        firstActivity: Object.values(entities.activities)[0],
        firstFollow: Object.values(entities.follows)[0],
        followers: fetchFollowers(entities.users[session.id], entities.follows) || 0,
        followings: fetchFollowings(entities.users[session.id], entities.follows)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFollows: () => dispatch(fetchAllFollows()),
        fetchAllActivities: () => dispatch(fetchAllActivities()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)