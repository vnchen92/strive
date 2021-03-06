import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comments_actions"

const initialState = {

}

const commentsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_COMMENTS:
            nextState = {...action.comments};
            return nextState;
        case RECEIVE_COMMENT:
            if (nextState[action.comment.activityId] === undefined) {
                let newActivityId = {}
                newActivityId[action.comment.id] = action.comment;
                nextState[action.comment.activityId] = newActivityId;
            } else {
                let currentState = nextState[action.comment.activityId][action.comment.id];
                nextState[action.comment.activityId][action.comment.id] = {...currentState, ...action.comment};
            }
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.comment.activityId][action.comment.id]
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;