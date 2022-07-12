@activities.each do |activity|
    json.set! activity.id do 
        json.array! activity.comments.each do |comment|
            json.extract! comment, :id, :body, :user_id, :activity_id
        end
    end
end