import React, { useEffect, useState } from 'react';
import Comment from './comment';

const Comments = ({activityId, fetchAllComments, comments, currentUser, deleteComment, toggleCommentForm, setComment}) => {

    let currentComments = [];

    useEffect(() => {
        fetchAllComments();
    }, [])

    // useEffect(() => {
    //     toggleCommentForm()
    // }, [comments])

    for(const postId in comments) {
        if (parseInt(postId) === activityId){
            Object.values(comments[postId]).map((com => {
                currentComments.push(com);
            }))
        }
    }

    currentComments.sort((a,b) => new Date(a.postedOn) - new Date(b.postedOn));
    
    return (
        <>
            {
            currentComments.map(comment => {
                return <div key={comment.id} className='comment-container'>
                    <Comment 
                        comment={comment} 
                        currentUser={currentUser} 
                        deleteComment={deleteComment}
                        setComment={setComment}
                        //sendComment={sendComment}
                    />
                </div>
            })
            }
        </>
    )
}

export default Comments;