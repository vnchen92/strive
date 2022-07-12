@activities.each do |activity|
    json.post_id do 
        json.set! activity.id do 
            activity.comments.each do |comment|
                json.set! comment.id do
                    activity_user = comment.user
                    json.extract! comment, :id, :body, :user_id, :activity_id
                    json.extract! activity_user, :firstName, :lastName
                end
            end
        end
    end
end