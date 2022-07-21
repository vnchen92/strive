import React, { useState } from 'react';
import ActivityItem from './activity_item';

const ActivitiesDashboard = ({ filteredActivities, currentUser, user, fetchAllComments, comments, deleteComment, kudos, createKudo, deleteKudo }) => {
    const [activities] = useState(filteredActivities);
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
                        deleteKudo={deleteKudo}
                    />
                </div>
            })
        }
        </div>
    )
}

export default ActivitiesDashboard;