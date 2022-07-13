import React from 'react';

const Comment = ({comment, currentUser, deleteComment}) => {
    debugger
    return (
        <>
            <img className='comment-user-icon' src={comment.profilePic} alt="" />
            <div className='comment-right-container'>
                <div className='comment-name-time-delete-container'>
                    <p className='comment-name'>{comment.firstName}&nbsp;{comment.lastName}</p>
                    <div className='comment-time-delete-container'>
                        <p className='comment-time'>{comment.createdAt}
                        {
                        currentUser.id === comment.userId ? (
                            <button className='comment-delete-btn' onClick={() => deleteComment(comment.id)}>&nbsp;| Delete</button>
                        ) : (
                            <></>
                        )
                        }
                        </p>
                    </div>
                </div>
                <p className='comment-body'>{comment.body}</p>
            </div>
        </>
    )
}

export default Comment;