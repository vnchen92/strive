import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditCommentFormContainer from './edit_comment_form';

const Comment = ({ comment, currentUser, deleteComment, setComment}) => {

    const [showDiv, setShowDiv] = useState(false)

    // const toggleEditCommentForm = () => {
    //     setShowDiv(!showDiv)
    // }

    const toggleEditCommentForm = () => {
        //sendComment(comment.id, currentUser, comment.postedOn, comment.activityId, comment.body)
        setComment({
            commentId: comment.id,
            activityId: comment.activityId,
            postedOn: comment.postedOn,
            body: comment.body,
            currentUser: currentUser
        })
    }

    const monthNameToNum = {
        "Jan": '01',
        "Feb": '02',
        "Mar": '03',
        "Apr": '04',
        "May": '05',
        "Jun": '06',
        "Jul": '07',
        "Aug": '08',
        "Sep": '09',
        "Oct": '10',
        "Nov": '11',
        "Dec": '12',
    }

    const convertMonthNametoNum = date => {
        let newDate = new Date(date).toString().split(" ").splice(1, 3)
        let month = monthNameToNum[newDate[0]]
        newDate[0] = month;
        return new Date(newDate[2], newDate[0], newDate[1]);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const presentDate = convertMonthNametoNum(comment.postedOn)
    const activityDate = convertMonthNametoNum(new Date())
    const daysAgo = Math.round(Math.abs((presentDate - activityDate) / oneDay));

    // const oneDay = 24 * 60 * 60 * 1000;
    // const presentDate = new Date(comment.createdAt)
    // const activityDate = new Date(activityPostedOn)
    // const daysAgo = Math.round(Math.abs((presentDate - activityDate) / oneDay));

    // const [showDiv, setShowDiv] = useState(false)

    // const toggleCommentForm = () => {
    //     setShowDiv(!showDiv)
    // }

    return (
        <>
            <img className='comment-user-icon' src={comment.profilePic} alt="" />
            <div className='comment-right-container'>
                <div className='comment-name-time-delete-container'>
                    <p className='comment-name'><Link to={currentUser.id === comment.userId ? `/dashboard/my_activities` : `/athletes/${comment.userId}`}>{comment.firstName}&nbsp;{comment.lastName}</Link></p>
                    <div className='comment-time-delete-container'>
                        <p className='comment-time'>{daysAgo}&nbsp;{daysAgo === 1 ? 'day ago' : 'days ago'}
                        {
                        currentUser.id === comment.userId ? (
                            <>
                                <button className='comment-delete-btn' onClick={() => deleteComment(comment.id)}>&nbsp;| Delete</button>
                                <button id="edit" className='comment-delete-btn' onClick={toggleEditCommentForm}>&nbsp;| Edit</button>
                                {/* <button className='comment-delete-btn' onClick={toggleCommentForm}>&nbsp;| Edit</button> */}
                            </>
                        ) : (
                            <></>
                        )
                        }
                        </p>
                    </div>
                </div>
                <p className='comment-body'>{comment.body}</p>
                {/* <div className={`comment-create-container`} style={{display: showDiv ? 'block' : 'none'}}>
                    <EditCommentFormContainer 
                        id={comment.id} 
                        activityId={comment.activityId} 
                        currentUser={currentUser} 
                        postedOn={comment.postedOn} 
                        body={comment.body}
                        //toggleEditCommentForm={toggleEditCommentForm}
                    />
                </div> */}
            </div>
        </>
    )
}

export default Comment;