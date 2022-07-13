import * as CommentApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = comment => {
    debugger
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

export const fetchAllComments = () => dispatch => {
    return (
        CommentApiUtil.fetchAllComments()
            .then(res => dispatch(receiveComments(res)))
    )
}

export const fetchComment = commentId => dispatch => {
    return (
        CommentApiUtil.fetchComment(commentId)
            .then(res => dispatch(receiveComment(res)))
    )
}

export const createComment = comment => dispatch => {
    return (
        CommentApiUtil.createComment(comment)
            .then(res => dispatch(receiveComment(res)))
    )
}

export const updateComment = comment => dispatch => {
    return (
        CommentApiUtil.updateComment(comment)
            .then(res => dispatch(receiveComment(res)))
    )
}

export const deleteComment = commentId => dispatch => {
    debugger
    return (
        CommentApiUtil.deleteComment(commentId)
            .then(res => {
                debugger
                return dispatch(removeComment(res))
            })
)}