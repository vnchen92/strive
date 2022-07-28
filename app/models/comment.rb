# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  user_id     :integer          not null
#  activity_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  posted_on   :datetime
#
class Comment < ApplicationRecord
    validates :body, :user_id, :activity_id, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    belongs_to :activity,
    class_name: :Activity,
    foreign_key: :activity_id
end
