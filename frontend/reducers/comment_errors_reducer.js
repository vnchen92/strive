import { RECEIVE_COMMENT_ERRORS, REMOVE_COMMENT_ERRORS } from "../actions/comments_actions";

const commentErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COMMENT_ERRORS:
            debugger
            return action.errors;
        case REMOVE_COMMENT_ERRORS:
            return [];
        default:
            return state;
    }
}

export default commentErrorsReducer;