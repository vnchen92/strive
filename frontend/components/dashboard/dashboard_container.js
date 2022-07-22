import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllActivities } from '../../actions/activities_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import { fetchFollowings } from '../selectors/fetch_followings';
import { fetchFollowers } from '../selectors/fetch_followers';
import { fetchProfileActivities } from '../selectors/fetch_profile_activities';
import { fetchAllKudos } from '../../actions/kudo_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        user: entities.users[session.id],
        firstActivity: Object.values(entities.activities)[0],
        firstFollow: Object.values(entities.follows)[0],
        followers: fetchFollowers(entities.users[session.id], entities.follows),
        followings: fetchFollowings(entities.users[session.id], entities.follows),
        activitiesNum: Object.values(fetchProfileActivities(entities, session, entities.activities)).length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFollows: () => dispatch(fetchAllFollows()),
        fetchAllActivities: () => dispatch(fetchAllActivities()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllKudos: () => dispatch(fetchAllKudos()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)