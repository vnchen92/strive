import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        follows: state.entities.follows
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)