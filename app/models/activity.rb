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
#  hours          :integer
#  minutes        :integer
#  seconds        :integer
#  time           :string           default("00:00:00"), not null
#  posted_on      :datetime
#  points         :json
#
class Activity < ApplicationRecord
    validates :title, :author_id, :posted_on, :distance, :pace, :hours, :minutes, :seconds, :time, presence: true
    validates :hours, :minutes, :seconds, :numericality => { :greater_than_or_equal_to => 0 }
    validates :minutes, :seconds, :numericality => { :less_than_or_equal_to => 59 }
    #accepts_nested_attributes_for :points
    #store :points, accessors: [:each_coord], coder: JSON

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
