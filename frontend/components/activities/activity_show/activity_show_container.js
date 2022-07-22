import { connect } from "react-redux"
import ActivityShow from "./activity_show"
import { deleteActivity } from "../../../actions/activities_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        activity: state.entities.activities[ownProps.match.params.id],
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        history: ownProps.history
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteActivity: (activityId) => dispatch(deleteActivity(activityId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);