import React from 'react'

const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.firstName}&nbsp;{comment.lastName}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;