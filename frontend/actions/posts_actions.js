import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const recieveAllPosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = post => {
    return {
        type: REMOVE_POST,
        post
    }
}

export const fetchAllPosts = () => dispatch => {
    return (
        PostApiUtil.fetchAllPosts().then(res => dispatch(recieveAllPosts(res)))
    )
}

export const fetchPost = post => dispatch => {
    return (
        PostApiUtil.fetchPost(post).then(res => dispatch(receivePost(res)))
    )
}

export const createPost = post => dispatch => {
    return (
        PostApiUtil.createPost(post).then(res => dispatch(receivePost(res)))
    )
}

export const updatePost = post => dispatch => {
    return (
        PostApiUtil.updatePost(post).then(res => dispatch(receivePost(res)))
    )
}

export const deletePost = post => dispatch => {
    return (
        PostApiUtil.deletePost(post).then(res => dispatch(removePost(res)))
    )
}