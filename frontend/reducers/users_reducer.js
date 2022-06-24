import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS } from "../actions/users_actions";

const initialState = {
    
}

const usersReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_ALL_USERS:
            nextState = {...action.users};
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;