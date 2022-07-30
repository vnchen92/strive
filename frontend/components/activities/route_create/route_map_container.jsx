import { connect } from 'react-redux';
import { createActivity, removeActivityErrors } from '../../../actions/activities_actions';
import RouteMap from './route_map';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.activity,
        history: ownProps.history
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createActivity: activity => dispatch(createActivity(activity)),
        removeActivityErrors: () => dispatch(removeActivityErrors)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteMap)