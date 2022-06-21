class Follow < ApplicationRecord
    validates :follower_id, :follows_id, null: false

    belongs_to :follower, #for profile, user following people
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :follows, #for dashboard, otherpeople following user
    foreign_key: :follows_id,
    class_name: User
end
