import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { updateComment } from '../../actions/comments_actions';

const CommentForm = props => {
    const [state, setState] = useState({
        id: props.id,
        activity_id: props.activityId, 
        user_id: props.currentUser.id,
        body: props.body,
        posted_on: props.postedOn
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.updateComment(state);
        setState({...state, body: ""})
        props.toggleEditCommentForm();
    }

    const renderErrors = () => {
        return (
            props.errors.map((error, idx) => {
                return error
            })
        )
    }

    return (
        <>
            <form className='comment-create-form' onSubmit={handleSubmit}>
                <img className='comment-form-user-icon' src={props.currentUser.profilePic} alt="" />
                <input className='comment-create-form-input' type="text" placeholder={props.errors.length > 0 ? renderErrors() : props.body} value={state.body} onChange={(e) => setState({...state, body: e.target.value})} />
                <button className='comment-post-btn'>Edit</button>
            </form>
        </>
    )
}

const mapStateToProps = ({entities, session, errors}) => {
    return {
        currentUser: entities.users[session.id],
        errors: errors.comment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateComment: (comment) => dispatch(updateComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);