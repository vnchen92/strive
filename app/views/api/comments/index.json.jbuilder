@activities.each do |activity|
    json.set! activity.id do 
        activity.comments.each do |comment|
            json.set! comment.id do
                activity_user = comment.user
                json.extract! comment, :id, :body, :user_id, :activity_id, :posted_on
                json.extract! activity_user, :firstName, :lastName, :profile_pic
            end
        end
    end
end