json.extract! @comment, :id, :body, :user_id, :activity_id, :posted_on
json.extract! @comment.user, :firstName, :lastName, :profile_pic