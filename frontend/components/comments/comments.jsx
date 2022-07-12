import React, { useEffect } from 'react';
import Comment from './comment';

const Comments = ({activityId, fetchAllComments, comments}) => {

    useEffect(() => {
        fetchAllComments();
    }, [])

    let component;

    for(const postId in comments) {
        if (postId === activityId){
            Object.values(comments[postId]).map((com => {
                component = <Comment comment={com}/>
            }))
        } else {
            component = <></>
        }
    }

    return (
        <div>
            {component}
        </div>
    )
}

export default Comments;