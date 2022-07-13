import React from 'react';

const Comment = ({comment, currentUser, deleteComment}) => {
    debugger
    return (
        <div>
            <p>{comment.firstName}&nbsp;{comment.lastName}</p>
            {
                currentUser.id === comment.userId ? (
                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                ) : (
                    <></>
                )
            }
            <p>{comment.createdAt}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;