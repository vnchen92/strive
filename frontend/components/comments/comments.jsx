import React, { useEffect, useState } from 'react';
import Comment from './comment';

const Comments = ({activityId, fetchAllComments, comments, currentUser, deleteComment}) => {

    let currentComments = [];

    useEffect(() => {
        fetchAllComments();
    }, [])

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
                return <div key={comment._id} className='comment-container'>
                    <Comment 
                        comment={comment} 
                        currentUser={currentUser} 
                        deleteComment={deleteComment}
                    />
                </div>
            })
            }
        </>
    )
}

export default Comments;