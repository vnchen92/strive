import { RECEIVE_ALL_FOLLOWS } from "../actions/follow_actions";

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_ALL_FOLLOWS:
            nextState = {...action.follows};
            return nextState;
        default:
            return state;
    }
}

export default followsReducer;