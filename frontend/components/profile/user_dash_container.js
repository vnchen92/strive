import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        user: state.entities.users[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)