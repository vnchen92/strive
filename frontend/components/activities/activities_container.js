import { connect } from 'react-redux';
import ActivitiesDashboard from './activities_dashboard';

const mapStateToProps = ({currentUser, activities}) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesDashboard)