import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../comments/comments';
import CommentFormContainer from '../comments/comment_form';
import EditCommentFormContainer from '../comments/edit_comment_form';
import Kudos from '../kudos/kudos';
import isLiked from '../selectors/isLiked';

const ActivityItem = ({activity, currentUser, user, fetchAllComments, comments, deleteComment, kudos, createKudo, deleteKudo, errors, removeCommentErrors}) => {
    let aProfilePage;

    if (currentUser.id === user.id && activity.authorId === currentUser.id) {
        aProfilePage = '/dashboard/my_activities';
    } else {
        aProfilePage = `/athletes/${activity.authorId}`
    }

    const timeArray = activity.time.split(":");

    const postedOnConverted = new Date(activity.postedOn).toString().split(" ").splice(0, 4).join(" ")

    const [showDiv, setShowDiv] = useState(false)
    const [currentComment, setComment] = useState({})
    const [hiddenDiv, setHiddenDiv] = useState(<></>)

    const toggleCommentForm = () => {
        setShowDiv(!showDiv)
    }

    useEffect(() => {
        if (Object.values(currentComment).length > 0) {
            setShowDiv(true)
        }
    }, [currentComment])

    const checkComment = () => {
        if (Object.values(currentComment).length === 0) { //create comment
            setHiddenDiv(
                <div className={`comment-create-container`} style={{display: showDiv ? 'block' : 'none'}}>
                    <CommentFormContainer 
                        activityId={activity.id} 
                        currentUser={currentUser} 
                        setShowDiv={setShowDiv}
                        setHiddenDiv={setHiddenDiv}
                        showDiv={showDiv}
                    />
                </div>
            )
        } else { //edit comment
            setHiddenDiv(
                <div className={`comment-create-container`} style={{display: showDiv ? 'block' : 'none'}}>
                    <EditCommentFormContainer 
                        activityId={currentComment.activityId} 
                        currentUser={currentComment.currentUser} 
                        body={currentComment.body} 
                        commentId={currentComment.commentId} 
                        postedOn={currentComment.postedOn}
                        setShowDiv={setShowDiv}
                        setComment={setComment}
                        setHiddenDiv={setHiddenDiv}
                        showDiv={showDiv}
                    />
                </div>
            )
        }
    }

    useEffect(() => {
        checkComment()
        removeCommentErrors()
    }, [showDiv])

    // useEffect(() => {
    //     if (!showDiv) {
    //         setHiddenDiv(<></>)
    //     }
    // })

    const handleLike = e => {
        let currentKudo = {
            user_id: currentUser.id,
            activity_id: activity.id
        };
        if (isAlreadyLiked !== true) {
            createKudo(currentKudo)
        } else {
            deleteKudo(filteredLikes.kudoId)
        }
    }

    let kudoIcon;

    let filteredLikes = isLiked(currentUser, kudos, activity.id);
    let isAlreadyLiked = filteredLikes.type;

    if (isAlreadyLiked) {
        kudoIcon = <img className='like-icon-orange' src="/assets/like_orange" alt="" onClick={handleLike} />
    } else { //no likes on this post
        kudoIcon = <img className='like-icon' src="/assets/like" alt="" onClick={handleLike} />
    }

    return (
        <div className='activity-container'>
            <div className='activity-icon-and-content-container'>
                <img className='activity-icon' src={activity.profilePic} alt="" />
                <div className='activity-content-container'>
                    <p className='activity-user-name'><Link to={aProfilePage}>{activity.firstName}&nbsp;{activity.lastName}</Link></p>
                    <p className='activity-created-at'>{postedOnConverted}</p>
                    <h1 className='activity-title'><Link to={`/activities/${activity.id}`}>{activity.title}</Link></h1>
                    <p className='activity-body'>{activity.body}</p>
                    <div className='activity-tabs-container'>
                        <div className='activity-dis-container'>
                            <p className='activity-tab'>Distance</p>
                            <p className='activity-text'>{activity.distance}mi</p>
                        </div>
                        <div className='activity-pace-container'>
                            <p className='activity-tab'>Pace</p>
                            <p className='activity-text'>{activity.pace}/mi</p>
                        </div>
                        <div className='activity-tab-container'>
                            <p className='activity-tab'>Time</p>
                            <p className='activity-text'>{timeArray[0] || "00"}hr {timeArray[1] || "00"}m {timeArray[2] || "00"}s</p>
                        </div>
                    </div>
                </div>
            </div>
            {
            activity.staticMapUrl ? <Link to={`activities/${activity.id}`}><img className='activity-static-map' src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:${activity.staticMapUrl}&key=${window.MAPS_API_KEY}`} alt="" /></Link> : <></>
            }
            <div className='comments-ent-container'>
                <div className='comments-icon-outer-container'>
                    <Kudos kudos={kudos} activityId={activity.id} />
                    <div className='comments-icon-container'>
                        {kudoIcon}
                        <img id="comment" className='comment-icon' src="/assets/comment" alt="" onClick={toggleCommentForm} />
                    </div>
                </div>
                <div className='comments-container'>
                        <Comments 
                            activityId={activity.id} 
                            fetchAllComments={fetchAllComments} 
                            comments={comments} 
                            currentUser={currentUser}
                            deleteComment={deleteComment}
                            setComment={setComment}
                        />
                </div>
                {hiddenDiv}
            </div>
        </div>
    )
}

export default ActivityItem;