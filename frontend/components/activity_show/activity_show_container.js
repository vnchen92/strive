import { connect } from "react-redux"
import ActivityShow from "./activity_show"

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        activity: state.entities.activities[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);