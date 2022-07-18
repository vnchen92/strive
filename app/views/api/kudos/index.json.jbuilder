@activities.each do |activity|
    json.set! activity.id do
        activity.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :user_id, activity_id
            end
        end
    end
end