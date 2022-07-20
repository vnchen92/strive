# == Schema Information
#
# Table name: activities
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  body           :string
#  author_id      :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  distance       :float
#  pace           :float
#  static_map_url :string
#  points         :string           is an Array
#  posted_on      :string
#  time           :string           default("00:00:00")
#
class Activity < ApplicationRecord
    validates :title, :author_id, :posted_on, :distance, :pace, :time, presence: true

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

    has_many :comments,
    class_name: :Comment,
    foreign_key: :activity_id

    has_many :likes,
    class_name: :Kudo,
    foreign_key: :activity_id
end
