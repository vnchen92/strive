import React, { useEffect, useState } from 'react';
import Comment from './comment';

const Comments = ({activityId, fetchAllComments, comments, currentUser, deleteComment}) => {

    let currentComments = [];

    useEffect(() => {
        fetchAllComments();
        //debugger
    }, [])

    for(const postId in comments) {
        //debugger
        if (parseInt(postId) === activityId){
            //debugger
            Object.values(comments[postId]).map((com => {
                currentComments.push(com);
            }))
        }
    }
    //debugger
    return (
        <div>
            {
            currentComments.map(comment => {
                return <Comment comment={comment} currentUser={currentUser} deleteComment={deleteComment}/>
            })
            }
        </div>
    )
}

export default Comments;