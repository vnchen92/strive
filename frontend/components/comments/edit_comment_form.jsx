import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { removeCommentErrors, updateComment } from '../../actions/comments_actions';

const CommentForm = props => {
    const [state, setState] = useState({
        id: props.commentId,
        activity_id: props.activityId, 
        user_id: props.currentUser.id,
        body: props.body,
        posted_on: props.postedOn
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.updateComment(state)
            .then(() => {
                props.setComment({})
                props.setHiddenDiv(<></>)
                props.setShowDiv(false)
            })
    }

    const handleCancel = e => {
        props.setComment({})
        props.setHiddenDiv(<></>)
        props.setShowDiv(false)
    }

    const renderErrors = () => {
        return (
            props.errors.map((error, idx) => {
                return <li className="comment-error" key={idx}>{error}</li>
            })
        )
    }

    return (
        <>
            <div className="comment-error-container">
                {renderErrors()}
            </div>
            <form className='comment-create-form' onSubmit={handleSubmit}>
                <img className='comment-form-user-icon' src={props.currentUser.profilePic} alt="" />
                <input 
                    className='comment-create-form-input' 
                    type="text" 
                    placeholder={props.body} 
                    value={state.body} 
                    onChange={(e) => setState({...state, body: e.target.value})} 
                />
                <button className='comment-post-btn'>Edit</button>
                <button className='comment-post-btn' onClick={handleCancel}>Cancel</button>
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
        updateComment: (comment) => dispatch(updateComment(comment)),
        removeCommentErrors: () => dispatch(removeCommentErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);