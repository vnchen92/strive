class Follow < ApplicationRecord
    validates :follow_id, :follows_id, null: false

    belongs_to :follower, #for dashboard, otherpeople following user
    foreign_key: :follow_id,
    class_name: :User

    belongs_to :follows,   #for profile, user following people
    foreign_key: :follows_id,
    class_name: :User
end
