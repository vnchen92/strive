import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)