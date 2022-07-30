import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createComment, removeCommentErrors } from '../../actions/comments_actions';

const CommentForm = props => {
    const [state, setState] = useState({
        activity_id: props.activityId, 
        user_id: props.currentUser.id,
        body: "",
        posted_on: new Date()
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.createComment(state)
            .then(() => {
                setState({...state, body: ""})
                props.setShowDiv(false)
                props.setHiddenDiv({})
            })
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
                <input className='comment-create-form-input' type="text" placeholder="Add a comment" value={state.body} onChange={(e) => setState({...state, body: e.target.value})} />
                <button className='comment-post-btn'>Post</button>
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
        createComment: (comment) => dispatch(createComment(comment)),
        removeCommentErrors: () => dispatch(removeCommentErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);