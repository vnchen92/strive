@activities.each do |activity|
    json.set! activity.id do 
        json.array! activity.comments.each do |comment|
            activity_user = comment.user
            json.extract! comment, :id, :body, :user_id, :activity_id
            json.extract! activity_user, :firstName, :lastName
        end
    end
end