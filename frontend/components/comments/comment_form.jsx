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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={state.body} onChange={(e) => setState({...state, body: e.target.value})} />
                <button>Post</button>
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