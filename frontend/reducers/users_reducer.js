import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const initialState = {
    
}

const usersReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;