import React, { useEffect } from 'react';
import Comment from './comment';

const Comments = ({activityId, fetchAllComments, comments}) => {

    useEffect(() => {
        fetchAllComments();
    }, [])

    let component;

    for(const postId in comments) {
        if (parseInt(postId) === activityId){
            debugger
            Object.values(comments[postId]).map((com => {
                debugger
                return component = <Comment comment={com}/>
            }))
        } else {
            component = <></>
        }
    }
    debugger
    return (
        <div>
            {component}
        </div>
    )
}

export default Comments;