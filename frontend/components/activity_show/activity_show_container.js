import { connect } from "react-redux"
import ActivityShow from "./activity_show"
import { fetchActivity } from "../../actions/activities_actions";


const mapStateToProps = (state, ownProps) => {
    return {
        activity: ownProps.match.params.id,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchActivity: (activity) => dispatch(fetchActivity(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);