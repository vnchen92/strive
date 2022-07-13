import React from 'react';

const Comment = ({comment, currentUser, deleteComment}) => {
    debugger
    return (
        <>
            <p className='comment-name'>{comment.firstName}&nbsp;{comment.lastName}</p>
            {
                currentUser.id === comment.userId ? (
                    <button className='comment-delete-btn' onClick={() => deleteComment(comment.id)}>Delete</button>
                ) : (
                    <></>
                )
            }
            <p className='comment-time'>{comment.createdAt}</p>
            <p className='comment-body'>{comment.body}</p>
        </>
    )
}

export default Comment;