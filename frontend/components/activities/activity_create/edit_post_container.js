import { connect } from 'react-redux';
import { updateActivity } from '../../../actions/activities_actions';
import ActivityForm from './activity_form';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        activity: state.entities.activities[ownProps.match.params.id],
        formType: 'Edit Activity',
        formButton: 'Save'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateActivity: (activity) => dispatch(updateActivity(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm)