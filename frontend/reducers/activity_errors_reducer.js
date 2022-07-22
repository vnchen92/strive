import { RECEIVE_ACTIVITY_ERRORS, REMOVE_ACTIVITY_ERRORS } from "../actions/activities_actions";

const activityErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ACTIVITY_ERRORS:
            return action.errors;
        case REMOVE_ACTIVITY_ERRORS:
            return [];
        default:
            return state;
    }
}

export default activityErrorsReducer;