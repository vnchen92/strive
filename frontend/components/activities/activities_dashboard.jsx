import React from 'react';
import ActivityItem from './activity_item';

const ActivitiesDashboard = ({ filteredActivities, currentUser, user, fetchAllComments, comments, deleteComment, kudos, createKudo }) => {
    //debugger
    return(
        <div>
        {
            Object.values(filteredActivities).map(activity => {
                return <div key={activity.id}>
                    <ActivityItem 
                        activity={activity} 
                        currentUser={currentUser} 
                        user={user} 
                        fetchAllComments={fetchAllComments} 
                        comments={comments}
                        deleteComment={deleteComment}
                        kudos={kudos}
                        createKudo={createKudo}
                    />
                </div>
            })
        }
        </div>
    )
}

export default ActivitiesDashboard;