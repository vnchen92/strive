import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

let defaultState = {
    id: null
}

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = { id: action.currentUser.id }
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState = defaultState;
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;