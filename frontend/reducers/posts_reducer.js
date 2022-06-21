import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/posts_actions";

let initialState = {

}

const postsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            nextState = {...action.posts}
            return nextState;
        case RECEIVE_POST:
            nextState[action.post.id] = action.post
        case REMOVE_POST:
            delete nextState[action.post]
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;