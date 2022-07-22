import { RECEIVE_ALL_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from "../actions/activities_actions";

let initialState = {

}

const activitiesReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_ALL_ACTIVITIES:
            nextState = {...action.activities}
            return nextState;
        case RECEIVE_ACTIVITY:
            nextState[action.activity.id] = action.activity
            return nextState
        case REMOVE_ACTIVITY:
            delete nextState[action.activity.id]
            return nextState;
        default:
            return state;
    }
}

export default activitiesReducer;