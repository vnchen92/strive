# == Schema Information
#
# Table name: kudos
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  activity_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Kudo < ApplicationRecord
    validates :user_id, :activity_id, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    belongs_to :activity,
    class_name: :Activity,
    foreign_key: :activity_id
end
