import { connect } from 'react-redux';
import { createActivity, removeActivityErrors } from '../../../actions/activities_actions';
import RouteMap from './route_map';

const mapStateToProps = ({entities, session, errors}) => {
    return {
        currentUser: entities.users[session.id],
        errors: errors.activity
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createActivity: activity => dispatch(createActivity),
        removeActivityErrors: () => dispatch(removeActivityErrors)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteMap)