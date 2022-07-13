import React from 'react';

const Comment = ({comment}) => {
    debugger
    return (
        <div>
            <p>{comment.firstName}&nbsp;{comment.lastName}</p>
            <p>{comment.createdAt}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;