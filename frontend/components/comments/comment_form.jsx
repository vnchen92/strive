import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createComment } from '../../actions/comments_actions';

const CommentForm = props => {
    const [state, setState] = useState({
        activity_id: props.activityId, 
        user_id: props.currentUser.id,
        body: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.createComment(state);
    }

    return (
        <div className={`comment-create-container`}>
            <form className='comment-create-form' onSubmit={handleSubmit}>
                <img className='comment-form-user-icon' src={props.currentUser.profilePic} alt="" />
                <input className='comment-create-form-input' type="text" placeholder='Add a comment' value={state.body} onChange={(e) => setState({...state, body: e.target.value})} />
                <button className='comment-post-btn'>Post</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);