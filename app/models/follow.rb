class Follow < ApplicationRecord
    validates :follower_id, :following_id, null: false

    belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :following, 
    foreign_key: :following_id,
    class_name: :User
end
