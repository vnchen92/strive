import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_ERRORS:
            nextState[action.errors] = action.errors;
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState = {};
            return nextState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;