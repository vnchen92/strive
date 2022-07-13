json.extract! @comment, :id, :body, :user_id, :activity_id, :created_at
json.extract! @comment.user, :firstName, :lastName