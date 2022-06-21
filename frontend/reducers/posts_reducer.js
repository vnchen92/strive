import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/posts_actions";

let initialState = {

}

const postsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
        
        case RECEIVE_POST:

        case REMOVE_POST:

        default:
            return state;
    }
}