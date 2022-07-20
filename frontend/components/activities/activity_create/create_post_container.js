import { connect } from 'react-redux';
import ActivityForm from './activity_form';
import { createActivity } from '../../../actions/activities_actions';


const mapStateToProps = ({entities, session, errors})=> {
    return {
        currentUser: entities.users[session.id],
        errors: errors.activity,
        formType: 'Create a Post',
        formButton: 'Create'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createActivity: (activity) => dispatch(createActivity(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);