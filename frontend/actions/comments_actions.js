import * as CommentApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS'

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
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

const receiveCommentErrors = errors => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
}

export const removeCommentErrors = () => {
    return {
        type: REMOVE_COMMENT_ERRORS
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
            .then(res => dispatch(receiveComment(res))),
            err => {
                return dispatch(receiveCommentErrors(err.responseJSON))
            }
    )
}

export const updateComment = comment => dispatch => {
    return (
        CommentApiUtil.updateComment(comment)
            .then(res => dispatch(receiveComment(res))),
            err => {
                return dispatch(receiveCommentErrors(err.responseJSON))
            }
    )
}

export const deleteComment = commentId => dispatch => {
    return (
        CommentApiUtil.deleteComment(commentId)
            .then(res => dispatch(removeComment(res)))
    )
}