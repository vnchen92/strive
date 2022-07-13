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
            //debugger
            let newComment = {};
            newComment[action.comment.id] = action.comment;
            debugger
            nextState[action.comment.postId] = {...state, newComment};

            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.comment.postId].action.comment.id
            return nextState;
        default:
            return nextState;
    }
}

export default commentsReducer;